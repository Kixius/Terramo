import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';

export default function ItineraryMap({ activities }) {
  const validActivities = activities.filter(a => a && a.coordinates);
  const positions = validActivities.map(a => [a.coordinates.lat, a.coordinates.lng]);

  if (positions.length < 2) return null;

  const colors = ['#ca5d1e', '#183054', '#ca5d1e'];
  const labels = ['M', 'A', 'E'];
  const bounds = L.latLngBounds(positions);

  return (
    <div className="itinerary-map-container">
      <MapContainer
        bounds={bounds}
        boundsOptions={{ padding: [40, 40] }}
        scrollWheelZoom={true}
        className="itinerary-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {validActivities.map((activity, i) => (
          <Marker
            key={i}
            position={[activity.coordinates.lat, activity.coordinates.lng]}
            icon={L.divIcon({
              html: `<div style="
                background: ${colors[i] || '#ca5d1e'};
                color: white;
                border-radius: 50%;
                width: 28px;
                height: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: 700;
                border: 2px solid white;
                box-shadow: 0 2px 6px rgba(0,0,0,0.3);
              ">${labels[i]}</div>`,
              className: 'custom-marker',
              iconSize: [28, 28],
              iconAnchor: [14, 14],
              popupAnchor: [0, -14]
            })}
          >
            <Popup>
              <strong>{activity.activity}</strong>
              {activity.location && (
                <p style={{ fontSize: '0.8rem', color: '#666', margin: '4px 0' }}>{activity.location}</p>
              )}
            </Popup>
          </Marker>
        ))}
        <Polyline
          positions={positions}
          pathOptions={{
            color: '#183054',
            weight: 3,
            opacity: 0.7,
            dashArray: '8, 8'
          }}
        />
      </MapContainer>
    </div>
  );
}
