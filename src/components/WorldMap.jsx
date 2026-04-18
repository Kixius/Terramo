import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

function MapUpdater({ cities }) {
  const map = useMap();
  useEffect(() => {
    if (cities.length === 0) {
      map.setView([20, 0], 2);
    } else if (cities.length < 12) {
      const bounds = L.latLngBounds(cities.map(c => [c.coordinates.lat, c.coordinates.lng]));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 5 });
    } else {
      map.setView([20, 0], 2);
    }
  }, [cities, map]);
  return null;
}

function CityMarker({ city }) {
  const navigate = useNavigate();
  const icon = L.divIcon({
    html: `<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2l3.5 7.5L25 10.8l-5.5 5 1.3 8L14 20.3 7.2 23.8l1.3-8-5.5-5L10.5 9.5z" fill="#ca5d1e" stroke="#fff" stroke-width="1.5"/>
      <circle cx="14" cy="13" r="2.5" fill="#fff"/>
    </svg>`,
    className: 'custom-marker',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14]
  });

  const thumbUrl = city.image ? city.image.replace('w=800', 'w=300') : '';

  return (
    <Marker position={[city.coordinates.lat, city.coordinates.lng]} icon={icon}>
      <Popup maxWidth={280} minWidth={240}>
        <div className="map-popup-enhanced">
          <div className="popup-image" style={{ backgroundImage: `url(${thumbUrl})` }}>
            <div className="popup-image-overlay">
              <span className="popup-emoji">{city.emoji}</span>
              <h4 className="popup-city-name">{city.name}</h4>
            </div>
          </div>
          <div className="popup-body">
            <p className="popup-tagline">{city.tagline}</p>
            <button className="popup-explore-btn" onClick={() => navigate('/city/' + city.id)}>
              Explore
            </button>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default function WorldMap({ cities }) {
  return (
    <div className="home-map-container">
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true} className="world-map" minZoom={2} maxZoom={18} maxBounds={[[-90, -180], [90, 180]]} maxBoundsViscosity={1.0}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapUpdater cities={cities} />
        {cities.map(city => (
          <CityMarker key={city.id} city={city} />
        ))}
      </MapContainer>
    </div>
  );
}
