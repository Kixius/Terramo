import { useState } from 'react';
import useCustomItinerary from '../hooks/useCustomItinerary';
import ActivityPool from './ActivityPool';
import ItineraryMap from './ItineraryMap';

const slots = [
  { key: 'morning', icon: '\u{1F305}', label: 'Morning' },
  { key: 'afternoon', icon: '☀️', label: 'Afternoon' },
  { key: 'evening', icon: '\u{1F319}', label: 'Evening' }
];

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
      setActiveSlot(null);
      setShowPool(false);
    }
  };

  const handleSlotClick = (slotKey) => {
    if (currentDay[slotKey]) {
      return;
    }
    setActiveSlot(slotKey);
    setShowPool(true);
  };

  const mapActivities = currentDay
    ? [currentDay.morning, currentDay.afternoon, currentDay.evening]
    : [null, null, null];

  const assignedActivities = itinerary.days.flatMap(d =>
    [d.morning, d.afternoon, d.evening].filter(Boolean)
  );

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
      </div>

      <div className="itinerary-builder">
        {/* Pool Panel */}
        {showPool && (
          <ActivityPool
            cityId={cityId}
            onSelectActivity={handlePoolSelect}
            assignedActivities={assignedActivities}
          />
        )}
        {!showPool && (
          <div className="builder-pool" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p style={{ marginBottom: '0.5rem' }}>Tap an empty slot to browse activities</p>
              <button className="builder-btn" onClick={() => setShowPool(true)}>
                Browse All Activities
              </button>
            </div>
          </div>
        )}

        {/* Timeline Panel */}
        <div className="builder-timeline">
          <ItineraryMap activities={mapActivities} />

          {/* Day selector */}
          <div className="itinerary-tabs" style={{ marginBottom: '0.5rem' }}>
            {itinerary.days.map((day, i) => (
              <button
                key={i}
                className={`itinerary-tab ${selectedDay === i ? 'active' : ''}`}
                onClick={() => setSelectedDay(i)}
              >
                {day.title}
              </button>
            ))}
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
          {currentDay && slots.map(({ key, icon, label }) => (
            <div key={key} className="builder-slot">
              <span className="slot-icon">{icon}</span>
              <div style={{ flex: 1 }}>
                <strong className="slot-label">{label}</strong>
                {currentDay[key] ? (
                  <div className="builder-slot-filled">
                    <button
                      className="builder-slot-remove"
                      onClick={() => removeActivity(selectedDay, key)}
                      aria-label="Remove activity"
                    >
                      ×
                    </button>
                    <p className="builder-slot-activity-name">{currentDay[key].activity}</p>
                    <p className="builder-slot-meta">{currentDay[key].cost} · {currentDay[key].duration}</p>
                    {currentDay[key].ageRanges && (
                      <div className="age-badges">
                        {currentDay[key].ageRanges.map(range => (
                          <span key={range} className={`age-badge age-${range.replace('+', '-plus')}`}>{range}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className="builder-slot-empty"
                    onClick={() => handleSlotClick(key)}
                  >
                    Tap to add {label.toLowerCase()} activity
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
