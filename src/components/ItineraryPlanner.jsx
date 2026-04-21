import { useState } from 'react';
import itineraries from '../data/itineraries';
import ItineraryMap from './ItineraryMap';
import ItineraryBuilder from './ItineraryBuilder';

export default function ItineraryPlanner({ cityId }) {
  const [activeTab, setActiveTab] = useState(3);
  const [selectedDay, setSelectedDay] = useState(0);
  const itinerary = itineraries.find(it => it.cityId === cityId);

  if (!itinerary) return null;

  const isCustom = activeTab === 'custom';
  const days = isCustom ? null : (activeTab === 3 ? itinerary.days3 : activeTab === 5 ? itinerary.days5 : itinerary.days7);
  const slots = [
    { key: 'morning', icon: '\u{1F305}', label: 'Morning' },
    { key: 'afternoon', icon: '☀️', label: 'Afternoon' },
    { key: 'evening', icon: '\u{1F319}', label: 'Evening' }
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedDay(0);
  };

  return (
    <section className="city-section itinerary-section">
      <h2>Trip Itinerary</h2>
      <div className="itinerary-tabs">
        <button className={`itinerary-tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabChange(3)}>3-Day</button>
        <button className={`itinerary-tab ${activeTab === 5 ? 'active' : ''}`} onClick={() => handleTabChange(5)}>5-Day</button>
        <button className={`itinerary-tab ${activeTab === 7 ? 'active' : ''}`} onClick={() => handleTabChange(7)}>7-Day</button>
        <button className={`itinerary-tab custom-tab ${isCustom ? 'active' : ''}`} onClick={() => handleTabChange('custom')}>✏️ Custom</button>
      </div>

      {isCustom ? (
        <ItineraryBuilder cityId={cityId} />
      ) : (
        <>
          <ItineraryMap
            activities={[days[selectedDay].morning, days[selectedDay].afternoon, days[selectedDay].evening]}
          />
          <div className="itinerary-timeline">
            {days.map((day, i) => (
              <div
                key={i}
                className={`itinerary-day ${selectedDay === i ? 'selected' : ''}`}
                onClick={() => setSelectedDay(i)}
              >
                <h3 className="day-title">Day {i + 1}: {day.title}</h3>
                <div className="day-slots">
                  {slots.map(({ key, icon, label }) => (
                    <div key={key} className="time-slot">
                      <span className="slot-icon">{icon}</span>
                      <div className="slot-content">
                        <strong className="slot-label">{label}</strong>
                        <p className="slot-activity">{day[key].activity}</p>
                        <p className="slot-desc">{day[key].description}</p>
                        {(day[key].location || day[key].duration || day[key].cost) && (
                          <div className="slot-meta">
                            {day[key].location && (
                              <span className="slot-meta-item">
                                <span className="meta-icon">📍</span> {day[key].location}
                              </span>
                            )}
                            {day[key].duration && (
                              <span className="slot-meta-item">
                                <span className="meta-icon">⏱</span> {day[key].duration}
                              </span>
                            )}
                            {day[key].cost && (
                              <span className="slot-meta-item">
                                <span className="meta-icon">💰</span> {day[key].cost}
                              </span>
                            )}
                          </div>
                        )}
                        {day[key].tip && (
                          <p className="slot-tip">
                            <span className="meta-icon">💡</span> {day[key].tip}
                          </p>
                        )}
                        {day[key].ageRanges && (
                          <div className="age-badges">
                            {day[key].ageRanges.map(range => (
                              <span key={range} className={`age-badge age-${range.replace('+', '-plus')}`}>{range}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
