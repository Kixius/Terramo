import { useParams, Link } from 'react-router-dom';
import cities from '../data/cities';
import ChatAssistant from '../components/ChatAssistant';
import ItineraryPlanner from '../components/ItineraryPlanner';

export default function CityGuide() {
  const { cityId } = useParams();
  const city = cities.find(c => c.id === cityId);

  if (!city) {
    return (
      <div className="not-found">
        <h2>City not found</h2>
        <Link to="/" className="btn-primary">Back to all cities</Link>
      </div>
    );
  }

  return (
    <div className="city-guide">
      <div className="city-hero" style={{ backgroundImage: `url(${city.image})` }}>
        <div className="city-hero-overlay">
          <Link to="/" className="back-link">← All Cities</Link>
          <div className="city-hero-info">
            <span className="city-hero-emoji">{city.emoji}</span>
            <h1>{city.name}</h1>
            <p className="city-hero-country">{city.country}</p>
            <span className="city-hero-tagline">{city.tagline}</span>
          </div>
        </div>
      </div>

      <div className="city-content">
        <p className="city-description">{city.description}</p>

        <div className="city-info-grid">
          <div className="info-card">
            <h3>Best Time to Visit</h3>
            <p>{city.bestTime}</p>
          </div>
          <div className="info-card">
            <h3>Currency</h3>
            <p>{city.currency}</p>
          </div>
          <div className="info-card">
            <h3>Language</h3>
            <p>{city.language}</p>
          </div>
        </div>

        <section className="city-section">
          <h2>Top Highlights</h2>
          <div className="highlights-grid">
            {city.highlights.map((h, i) => (
              <div key={i} className="highlight-item">
                <span className="highlight-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="highlight-name">{h}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="city-section">
          <h2>Neighborhoods to Explore</h2>
          <div className="neighborhoods-grid">
            {city.neighborhoods.map((n, i) => (
              <div key={i} className="neighborhood-card">
                <h4>{n.name}</h4>
                <p>{n.vibe}</p>
              </div>
            ))}
          </div>
        </section>

        <ItineraryPlanner cityId={city.id} />

        <div className="city-section-row">
          <section className="city-section">
            <h2>Local Tips</h2>
            <ul className="tips-list">
              {city.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </section>

          <section className="city-section">
            <h2>Must-Try Foods</h2>
            <div className="foods-grid">
              {city.foods.map((food, i) => (
                <span key={i} className="food-tag">{food}</span>
              ))}
            </div>
          </section>
        </div>
      </div>

      <ChatAssistant cityName={city.name} />
    </div>
  );
}
