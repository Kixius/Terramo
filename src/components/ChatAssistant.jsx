import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default function ChatAssistant({ cityName, cityData }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: `Hi! I'm your AI travel assistant for ${cityName}. Ask me anything — local tips, hidden gems, food recommendations, or how to get around!` }
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickQuestions = [
    "What's the #1 must-do here?",
    "Best local food spots?",
    "How to get around cheaply?",
    "Any hidden gems?",
  ];

  function buildSystemPrompt() {
    if (!cityData) return `You are a helpful travel assistant for ${cityName}.`;
    return `You are a knowledgeable and friendly travel assistant for ${cityName}, ${cityData.country}. Use the following city data to give specific, helpful answers. Be concise (2-3 sentences max). Reference specific places, foods, and tips from the data when relevant.

City info:
- Name: ${cityData.name}, ${cityData.country}
- Tagline: ${cityData.tagline || ''}
- Currency: ${cityData.currency || ''}
- Language: ${cityData.language || ''}
- Best time to visit: ${cityData.bestTime || ''}
- Highlights: ${cityData.highlights?.join(', ') || ''}
- Must-try foods: ${cityData.foods?.join(', ') || ''}
- Local tips: ${cityData.tips?.join('; ') || ''}
- Neighborhoods: ${cityData.neighborhoods?.map(n => `${n.name} (${n.vibe})`).join('; ') || ''}
- Description: ${cityData.description || ''}`;
  }

  async function callGemini(userMessage) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey || apiKey === 'your_key_here') {
      return getFallbackResponse(userMessage);
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

      const chatHistory = messages
        .filter(m => m.role !== 'assistant' || messages.indexOf(m) > 0)
        .slice(-6)
        .map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.text }]
        }));

      const chat = model.startChat({
        history: [
          { role: 'user', parts: [{ text: 'System context: ' + buildSystemPrompt() }] },
          { role: 'model', parts: [{ text: `Got it! I'm ready to help with travel questions about ${cityName}. I'll be specific and reference the city data you provided.` }] },
          ...chatHistory
        ]
      });

      const result = await chat.sendMessage(userMessage);
      return result.response.text();
    } catch (err) {
      console.error('Gemini API error:', err);
      return getFallbackResponse(userMessage);
    }
  }

  function getFallbackResponse(question) {
    const q = question.toLowerCase();
    if (cityData) {
      if (q.includes('food') || q.includes('eat') || q.includes('restaurant')) {
        return `You must try ${cityData.foods?.slice(0, 3).join(', ') || 'the local cuisine'} while in ${cityName}! Ask locals for their favorite spots — they always know the best hidden food gems.`;
      }
      if (q.includes('must') || q.includes('top') || q.includes('#1')) {
        return `The top highlights in ${cityName} are ${cityData.highlights?.slice(0, 3).join(', ')}. ${cityData.tips?.[0] || ''}`;
      }
      if (q.includes('transport') || q.includes('get around') || q.includes('cheap')) {
        return `The local currency is ${cityData.currency || 'local currency'}. ${cityData.tips?.find(t => t.toLowerCase().includes('bus') || t.toLowerCase().includes('walk') || t.toLowerCase().includes('metro')) || 'Walk whenever possible and use public transit!'}`;
      }
    }
    return `Great question about ${cityName}! I'd recommend talking to locals for the best insider tips. ${cityData?.tips?.[0] || ''}`;
  }

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;
    const userMsg = text.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const response = await callGemini(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="chat-panel">
          <div className="chat-header">
            <h3>AI Travel Assistant</h3>
            <span className="chat-city">{cityName}</span>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message chat-message-${msg.role}`}>
                {msg.role === 'assistant' && <span className="chat-avatar">🤖</span>}
                <p>{msg.text}</p>
              </div>
            ))}
            {isLoading && (
              <div className="chat-message chat-message-assistant">
                <span className="chat-avatar">🤖</span>
                <p className="chat-typing">Thinking...</p>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-quick">
            {quickQuestions.map((q, i) => (
              <button key={i} className="quick-btn" onClick={() => sendMessage(q)} disabled={isLoading}>
                {q}
              </button>
            ))}
          </div>

          <form className="chat-input-form" onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about this city..."
              className="chat-input"
              disabled={isLoading}
            />
            <button type="submit" className="chat-send" disabled={isLoading}>Send</button>
          </form>
        </div>
      )}
    </>
  );
}
