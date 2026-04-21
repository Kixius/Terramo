import { useState } from 'react';
import useCustomItinerary from '../hooks/useCustomItinerary';
import ActivityPool from './ActivityPool';
import ItineraryMap from './ItineraryMap';

const slots = [
  { key: 'morning', icon: '\u{1F305}', label: 'Morning' },
  { key: 'afternoon', icon: '☀️', label: 'Afternoon' },
  { key: 'evening', icon: '\u{1F319}', label: 'Evening' }
];

function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistance(meters) {
  if (meters < 1000) return `${Math.round(meters)} m`;
  return `${(meters / 1000).toFixed(1)} km`;
}

function getLastActivityWithCoords(day, slotKey) {
  const slotOrder = ['morning', 'afternoon', 'evening'];
  const idx = slotOrder.indexOf(slotKey);
  for (let i = idx; i >= 0; i--) {
    const arr = day[slotOrder[i]];
    if (!arr || arr.length === 0) continue;
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j]?.coordinates) return { ...arr[j], label: slots.find(s => s.key === slotOrder[i]).label };
    }
  }
  return null;
}

export default function ItineraryBuilder({ cityId }) {
  const {
    itinerary,
    init,
    clear,
    addDay,
    removeDay,
    assignActivity,
    removeActivity,
    updateDayTitle,
  } = useCustomItinerary(cityId);

  const [selectedDay, setSelectedDay] = useState(0);
  const [activeSlot, setActiveSlot] = useState(null);
  const [showPool, setShowPool] = useState(false);
  const [allowRepeats, setAllowRepeats] = useState(false);

  if (!itinerary) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Build your own itinerary by picking activities from the city's full collection
        </p>
        <button className="builder-btn primary" onClick={init}>
          Start Building
        </button>
      </div>
    );
  }

  const currentDay = itinerary.days[selectedDay];

  const handlePoolSelect = (activity) => {
    if (activeSlot !== null && activeSlot !== undefined) {
      assignActivity(selectedDay, activeSlot, activity);
    }
  };

  const handleSlotClick = (slotKey) => {
    setActiveSlot(slotKey);
    setShowPool(true);
  };

  const mapActivities = currentDay
    ? [currentDay.morning, currentDay.afternoon, currentDay.evening].flat()
    : [];

  const assignedActivities = itinerary.days.flatMap(d =>
    [d.morning, d.afternoon, d.evening].flat().filter(Boolean)
  );

  const currentDaySlots = currentDay
    ? [currentDay.morning, currentDay.afternoon, currentDay.evening]
    : [[], [], []];

  return (
    <div>
      <div className="builder-toolbar">
        <button className="builder-btn" onClick={addDay}>+ Add Day</button>
        {itinerary.days.length > 1 && (
          <button className="builder-btn danger" onClick={() => removeDay(selectedDay)}>
            Remove Day
          </button>
        )}
        <button className="builder-btn danger" onClick={clear}>Clear All</button>
        <button
          className={`builder-btn${allowRepeats ? ' primary' : ''}`}
          onClick={() => setAllowRepeats(r => !r)}
          title="Allow using the same activity in multiple slots"
        >
          {allowRepeats ? '↻ Repeats On' : '↻ Repeats Off'}
        </button>
      </div>

      <div className="itinerary-builder">
        {/* Pool Panel */}
        {showPool && (
          <ActivityPool
            cityId={cityId}
            onSelectActivity={handlePoolSelect}
            assignedActivities={assignedActivities}
            allowRepeats={allowRepeats}
            currentDaySlots={currentDaySlots}
            activeSlot={activeSlot}
          />
        )}
        {!showPool && (
          <div className="builder-pool" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p style={{ marginBottom: '0.5rem' }}>Tap a slot to browse activities</p>
              <button className="builder-btn" onClick={() => { setActiveSlot('morning'); setShowPool(true); }}>
                Browse All Activities
              </button>
            </div>
          </div>
        )}

        {/* Timeline Panel */}
        <div className="builder-timeline">
          <ItineraryMap activities={mapActivities} />

          {/* Day slider */}
          <div className="day-slider">
            <button
              className="day-slider-arrow"
              onClick={() => setSelectedDay(Math.max(0, selectedDay - 1))}
              disabled={selectedDay === 0}
            >
              ‹
            </button>
            <div className="day-slider-center">
              <span className="day-slider-label">{currentDay?.title}</span>
              <span className="day-slider-counter">{selectedDay + 1} / {itinerary.days.length}</span>
            </div>
            <button
              className="day-slider-arrow"
              onClick={() => setSelectedDay(Math.min(itinerary.days.length - 1, selectedDay + 1))}
              disabled={selectedDay === itinerary.days.length - 1}
            >
              ›
            </button>
          </div>

          {/* Day title edit */}
          <input
            className="builder-pool-search"
            style={{ marginBottom: '0.75rem' }}
            type="text"
            value={currentDay?.title || ''}
            onChange={e => updateDayTitle(selectedDay, e.target.value)}
            placeholder="Day title..."
          />

          {/* Time slots */}
          {currentDay && slots.map(({ key, icon, label }) => {
            const activities = currentDay[key] || [];
            return (
              <div key={key} className="builder-slot">
                <span className="slot-icon">{icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong className="slot-label">{label}</strong>
                    <button
                      className="builder-slot-add-btn"
                      onClick={() => handleSlotClick(key)}
                    >
                      + Add
                    </button>
                  </div>
                  {activities.length === 0 && (
                    <div
                      className="builder-slot-empty"
                      onClick={() => handleSlotClick(key)}
                    >
                      Tap to add {label.toLowerCase()} activity
                    </div>
                  )}
                  {activities.map((act, idx) => {
                    const prev = idx === 0 ? getLastActivityWithCoords(currentDay, key) : (activities[idx - 1]?.coordinates ? { ...activities[idx - 1], label } : null);
                    const distLabel = (act?.coordinates && prev?.coordinates)
                      ? formatDistance(haversine(prev.coordinates.lat, prev.coordinates.lng, act.coordinates.lat, act.coordinates.lng))
                      : null;
                    return (
                      <div key={idx} className="builder-slot-filled">
                        <button
                          className="builder-slot-remove"
                          onClick={() => removeActivity(selectedDay, key, idx)}
                          aria-label="Remove activity"
                        >
                          ×
                        </button>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                          <img
                            src={`https://picsum.photos/seed/${encodeURIComponent(act.activity)}/80/80`}
                            alt=""
                            className="builder-slot-thumb"
                            loading="lazy"
                          />
                          <div>
                            <p className="builder-slot-activity-name">{act.activity}</p>
                            <p className="builder-slot-meta">
                              {act.cost && <span>{act.cost}</span>}
                              {act.cost && act.duration && <span> · </span>}
                              {act.duration && <span>{act.duration}</span>}
                              {act.hours && <span> · {act.hours}</span>}
                            </p>
                            {distLabel && (
                              <p className="builder-slot-distance">
                                → {distLabel} from {idx === 0 ? prev.label : label}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
