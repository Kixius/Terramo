import { useState } from 'react';
import { Link } from 'react-router-dom';
import useTrips from '../hooks/useTrips';
import cities from '../data/cities';

export default function MyTrips() {
  const { trips, createTrip, deleteTrip, addCityToTrip, removeCityFromTrip, updateTripNote } = useTrips();
  const [newName, setNewName] = useState('');
  const [expandedTrip, setExpandedTrip] = useState(null);
  const [addingCity, setAddingCity] = useState(null);
  const [search, setSearch] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    createTrip(newName.trim());
    setNewName('');
  };

  const getCity = (id) => cities.find(c => c.id === id);

  const filteredCities = search
    ? cities.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.country.toLowerCase().includes(search.toLowerCase())
      ).slice(0, 8)
    : [];

  return (
    <div className="trips-page">
      <div className="compare-header-bar">
        <Link to="/" className="back-link">← Back to Map</Link>
        <h1>My Trips</h1>
      </div>

      <form className="trip-create-form" onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="New trip name..."
          value={newName}
          onChange={e => setNewName(e.target.value)}
          className="compare-input"
        />
        <button type="submit" className="compare-go-btn" style={{ width: 'auto', marginTop: 0 }}>
          Create Trip
        </button>
      </form>

      {trips.length === 0 && (
        <div className="trips-empty">
          <p>No trips yet. Create one above to start planning!</p>
        </div>
      )}

      <div className="trips-grid">
        {trips.map(trip => (
          <div key={trip.id} className="trip-card">
            <div className="trip-card-header">
              <h3>{trip.name}</h3>
              <button className="trip-delete-btn" onClick={() => deleteTrip(trip.id)}>✕</button>
            </div>
            <div className="trip-card-cities">
              {trip.cities.map(id => {
                const city = getCity(id);
                return city ? (
                  <span key={id} className="trip-city-chip">
                    {city.emoji} {city.name}
                  </span>
                ) : null;
              })}
            </div>
            <p className="trip-card-date">
              {new Date(trip.createdAt).toLocaleDateString()}
            </p>
            <button
              className="compare-again-btn"
              style={{ marginTop: '0.5rem' }}
              onClick={() => setExpandedTrip(expandedTrip === trip.id ? null : trip.id)}
            >
              {expandedTrip === trip.id ? 'Collapse' : 'Expand'}
            </button>

            {expandedTrip === trip.id && (
              <div className="trip-detail">
                {trip.cities.map(id => {
                  const city = getCity(id);
                  if (!city) return null;
                  return (
                    <div key={id} className="trip-city-row">
                      <div className="trip-city-info">
                        <span>{city.emoji} <strong>{city.name}</strong></span>
                        <Link to={`/city/${id}`} className="trip-city-link">View</Link>
                        <button className="trip-remove-btn" onClick={() => removeCityFromTrip(trip.id, id)}>Remove</button>
                      </div>
                      <textarea
                        className="trip-note-input"
                        placeholder="Notes..."
                        value={trip.notes[id] || ''}
                        onChange={e => updateTripNote(trip.id, id, e.target.value)}
                      />
                    </div>
                  );
                })}

                <div className="trip-add-city">
                  <input
                    type="text"
                    placeholder="Add a city..."
                    value={addingCity === trip.id ? search : ''}
                    onChange={e => { setAddingCity(trip.id); setSearch(e.target.value); }}
                    className="compare-input"
                  />
                  {addingCity === trip.id && filteredCities.map(c => (
                    <button
                      key={c.id}
                      className="compare-option"
                      onClick={() => { addCityToTrip(trip.id, c.id); setSearch(''); setAddingCity(null); }}
                    >
                      {c.emoji} {c.name}, {c.country}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
