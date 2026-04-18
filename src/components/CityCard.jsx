import { Link } from 'react-router-dom';

export default function CityCard({ city }) {
  return (
    <Link to={`/city/${city.id}`} className="city-card">
      <div className="city-card-image" style={{ backgroundImage: `url(${city.image})` }}>
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
