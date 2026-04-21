import { useState, useMemo } from 'react';
import itineraries from '../data/itineraries';

const SLOT_ORDER = ['morning', 'afternoon', 'evening'];
const SLOT_LABELS = { morning: 'Morning', afternoon: 'Afternoon', evening: 'Evening' };

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

function getNearestFilled(slots, activeSlot) {
  const activeIdx = SLOT_ORDER.indexOf(activeSlot);
  if (activeIdx < 0) return null;
  for (let i = activeIdx; i >= 0; i--) {
    const arr = slots[i];
    if (!Array.isArray(arr) || arr.length === 0) continue;
    const last = arr[arr.length - 1];
    if (last?.coordinates) {
      return { activity: last, label: SLOT_LABELS[SLOT_ORDER[i]] };
    }
  }
  return null;
}

export default function ActivityPool({ cityId, onSelectActivity, assignedActivities, allowRepeats, currentDaySlots, activeSlot }) {
  const [search, setSearch] = useState('');
  const [ageFilters, setAgeFilters] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const allActivities = useMemo(() => {
    const itinerary = itineraries.find(it => it.cityId === cityId);
    if (!itinerary) return [];

    const seen = new Map();
    const addActivity = (act) => {
      if (!act) return;
      const name = act.activity;
      if (!seen.has(name) || act.description.length > seen.get(name).description.length) {
        seen.set(name, { ...act });
      }
    };

    ['days3', 'days5', 'days7'].forEach(plan => {
      if (!itinerary[plan]) return;
      itinerary[plan].forEach(day => {
        ['morning', 'afternoon', 'evening'].forEach(slot => {
          addActivity(day[slot]);
        });
      });
    });

    if (itinerary.extraActivities) {
      itinerary.extraActivities.forEach(addActivity);
    }

    return Array.from(seen.values());
  }, [cityId]);

  const assignedSet = useMemo(() => {
    if (!assignedActivities) return new Set();
    return new Set(assignedActivities.filter(Boolean).map(a => a.activity));
  }, [assignedActivities]);

  const nearestFilled = useMemo(() => getNearestFilled(currentDaySlots || [], activeSlot), [currentDaySlots, activeSlot]);

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

  const getPoolDistance = (activity) => {
    if (!nearestFilled?.activity?.coordinates || !activity?.coordinates) return null;
    const dist = haversine(
      nearestFilled.activity.coordinates.lat, nearestFilled.activity.coordinates.lng,
      activity.coordinates.lat, activity.coordinates.lng
    );
    return { dist: formatDistance(dist), from: nearestFilled.label };
  };

  const toggleAgeFilter = (range) => {
    setAgeFilters(prev =>
      prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]
    );
  };

  const handleSelect = (activity, isDisabled) => {
    if (isDisabled) return;
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
        {filtered.map((activity, i) => {
          const isAssigned = assignedSet.has(activity.activity);
          const isDisabled = !allowRepeats && isAssigned;
          const poolDist = getPoolDistance(activity);
          return (
            <div
              key={i}
              className={`pool-activity-card ${selectedActivity?.activity === activity.activity ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
              onClick={() => handleSelect(activity, isDisabled)}
            >
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <img
                  src={`https://picsum.photos/seed/${encodeURIComponent(activity.activity)}/80/80`}
                  alt=""
                  className="pool-activity-thumb"
                  loading="lazy"
                />
                <div style={{ flex: 1 }}>
                  <div className="pool-activity-name">{activity.activity}</div>
                  <div className="pool-activity-meta">
                    {activity.cost && <span>{activity.cost}</span>}
                    {activity.duration && <span>{activity.duration}</span>}
                    {activity.hours && <span>{activity.hours}</span>}
                    {poolDist && <span className="pool-distance-badge">→ {poolDist.dist} from {poolDist.from}</span>}
                  </div>
                  {activity.ageRanges && (
                    <div className="age-badges">
                      {activity.ageRanges.map(range => (
                        <span key={range} className={`age-badge age-${range.replace('+', '-plus')}`}>{range}</span>
                      ))}
                    </div>
                  )}
                  {isAssigned && (
                    <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 600 }}>
                      {isDisabled ? 'Already added' : 'Already added (tap to reuse)'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
