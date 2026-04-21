import { useState, useMemo } from 'react';
import itineraries from '../data/itineraries';

const slotIcons = { morning: '\u{1F305}', afternoon: '☀️', evening: '\u{1F319}' };

export default function ActivityPool({ cityId, onSelectActivity, assignedActivities }) {
  const [search, setSearch] = useState('');
  const [ageFilters, setAgeFilters] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const allActivities = useMemo(() => {
    const itinerary = itineraries.find(it => it.cityId === cityId);
    if (!itinerary) return [];

    const seen = new Map();
    ['days3', 'days5', 'days7'].forEach(plan => {
      if (!itinerary[plan]) return;
      itinerary[plan].forEach(day => {
        ['morning', 'afternoon', 'evening'].forEach(slot => {
          if (!day[slot]) return;
          const name = day[slot].activity;
          // Keep the most detailed version (longest description)
          if (!seen.has(name) || day[slot].description.length > seen.get(name).description.length) {
            seen.set(name, { ...day[slot] });
          }
        });
      });
    });

    return Array.from(seen.values());
  }, [cityId]);

  const assignedSet = useMemo(() => {
    if (!assignedActivities) return new Set();
    return new Set(assignedActivities.filter(Boolean).map(a => a.activity));
  }, [assignedActivities]);

  const filtered = useMemo(() => {
    let list = allActivities;

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(a =>
        a.activity.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        (a.location && a.location.toLowerCase().includes(q))
      );
    }

    if (ageFilters.length > 0) {
      list = list.filter(a =>
        a.ageRanges && ageFilters.some(f => a.ageRanges.includes(f))
      );
    }

    return list;
  }, [allActivities, search, ageFilters]);

  const toggleAgeFilter = (range) => {
    setAgeFilters(prev =>
      prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]
    );
  };

  const handleSelect = (activity) => {
    setSelectedActivity(activity);
    if (onSelectActivity) onSelectActivity(activity);
  };

  return (
    <div className="builder-pool">
      <div className="builder-pool-header">
        <input
          className="builder-pool-search"
          type="text"
          placeholder="Search activities..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="age-filter-row">
          {['0-3', '4-8', '9-12', '13+'].map(range => (
            <button
              key={range}
              className={`age-filter-btn ${ageFilters.includes(range) ? 'active' : ''}`}
              onClick={() => toggleAgeFilter(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
      <div className="builder-pool-list">
        {filtered.length === 0 && (
          <p style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            No activities match your filters
          </p>
        )}
        {filtered.map((activity, i) => (
          <div
            key={i}
            className={`pool-activity-card ${selectedActivity?.activity === activity.activity ? 'selected' : ''} ${assignedSet.has(activity.activity) ? 'assigned' : ''}`}
            onClick={() => handleSelect(activity)}
          >
            <div className="pool-activity-name">{activity.activity}</div>
            <div className="pool-activity-meta">
              {activity.cost && <span>{activity.cost}</span>}
              {activity.duration && <span>{activity.duration}</span>}
            </div>
            {activity.ageRanges && (
              <div className="age-badges">
                {activity.ageRanges.map(range => (
                  <span key={range} className={`age-badge age-${range.replace('+', '-plus')}`}>{range}</span>
                ))}
              </div>
            )}
            {assignedSet.has(activity.activity) && (
              <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 600 }}>Already added</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
