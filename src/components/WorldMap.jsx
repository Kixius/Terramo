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
    html: `<span style="font-size:24px">${city.emoji}</span>`,
    className: 'custom-marker',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
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
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true} className="world-map">
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
