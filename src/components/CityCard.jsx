import { Link } from 'react-router-dom';

export default function CityCard({ city, isFavorite, onToggleFavorite }) {
  return (
    <Link to={`/city/${city.id}`} className="city-card">
      <div className="city-card-image" style={{ backgroundImage: `url(${city.image})` }}>
        <button
          className={`favorite-btn${isFavorite ? ' active' : ''}`}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onToggleFavorite(city.id); }}
          aria-label={isFavorite ? 'Remove from saved' : 'Save city'}
        >
          {isFavorite ? '♥' : '♡'}
        </button>
        <div className="city-card-overlay">
          <span className="city-card-emoji">{city.emoji}</span>
          <h3 className="city-card-name">{city.name}</h3>
          <p className="city-card-country">{city.country}</p>
          <span className="city-card-tagline">{city.tagline}</span>
        </div>
      </div>
    </Link>
  );
}
