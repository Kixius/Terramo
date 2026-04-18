import { useState, useRef, useEffect } from 'react';

export default function ChatAssistant({ cityName }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: `Hi! I'm your AI travel assistant for ${cityName}. Ask me anything — local tips, hidden gems, food recommendations, or how to get around!` }
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
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

  const generateResponse = (question) => {
    const q = question.toLowerCase();
    if (q.includes('food') || q.includes('eat') || q.includes('restaurant')) {
      return `Great question about food in ${cityName}! I'd recommend exploring the local street food scene first — it's where you'll find the most authentic flavors. Ask locals for their favorite spots; they'll point you to hidden gems no guidebook mentions. Also, try visiting the neighborhood food markets in the morning when everything is freshest!`;
    }
    if (q.includes('must') || q.includes('must-do') || q.includes('top') || q.includes('#1')) {
      return `The absolute must-do in ${cityName}? Wake up early one morning and explore on foot before the crowds arrive. Find a local café where residents gather, order whatever they're having, and just soak in the atmosphere. The best travel moments happen when you wander without a plan!`;
    }
    if (q.includes('transport') || q.includes('get around') || q.includes('cheap')) {
      return `For getting around ${cityName} on a budget: walk whenever possible — you'll discover so much more on foot! Use public transit like the locals do, and consider day passes for savings. Ride-sharing apps are usually cheaper than taxis. And don't underestimate ferries or bikes if the city supports them!`;
    }
    if (q.includes('hidden') || q.includes('secret') || q.includes('gem')) {
      return `Here's a hidden gem strategy for ${cityName}: skip the top 10 lists and head to residential neighborhoods. Find where university students hang out — those areas always have the coolest, most affordable spots. Also, ask your hotel/hostel staff for their personal favorites, not the tourist recommendations!`;
    }
    return `That's a great question about ${cityName}! I'd recommend talking to locals — they always know best. Visit a neighborhood café during off-peak hours and strike up a conversation. Locals love sharing their city's secrets with curious travelers. Also, check out community boards and local event listings for authentic experiences!`;
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', text: generateResponse(text) }]);
    }, 800);
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
            <div ref={chatEndRef} />
          </div>

          <div className="chat-quick">
            {quickQuestions.map((q, i) => (
              <button key={i} className="quick-btn" onClick={() => sendMessage(q)}>
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
            />
            <button type="submit" className="chat-send">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
