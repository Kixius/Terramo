import { useState, useCallback } from 'react';

function getKey(cityId) {
  return 'terramo-custom-itinerary-' + cityId;
}

function createEmpty() {
  return {
    days: [
      { title: 'Day 1', morning: null, afternoon: null, evening: null },
      { title: 'Day 2', morning: null, afternoon: null, evening: null },
      { title: 'Day 3', morning: null, afternoon: null, evening: null },
    ],
    updatedAt: new Date().toISOString(),
  };
}

export default function useCustomItinerary(cityId) {
  const key = getKey(cityId);

  const [itinerary, setItinerary] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  const persist = useCallback((data) => {
    const withTimestamp = { ...data, updatedAt: new Date().toISOString() };
    localStorage.setItem(key, JSON.stringify(withTimestamp));
    return withTimestamp;
  }, [key]);

  const save = useCallback((data) => {
    const persisted = persist(data);
    setItinerary(persisted);
  }, [persist]);

  const init = useCallback(() => {
    const empty = createEmpty();
    save(empty);
  }, [save]);

  const clear = useCallback(() => {
    localStorage.removeItem(key);
    setItinerary(null);
  }, [key]);

  const addDay = useCallback(() => {
    setItinerary(prev => {
      if (!prev) return prev;
      const next = {
        ...prev,
        days: [...prev.days, { title: 'Day ' + (prev.days.length + 1), morning: null, afternoon: null, evening: null }],
      };
      return persist(next);
    });
  }, [persist]);

  const removeDay = useCallback((dayIndex) => {
    setItinerary(prev => {
      if (!prev || prev.days.length <= 1) return prev;
      const next = { ...prev, days: prev.days.filter((_, i) => i !== dayIndex) };
      // Re-number titles
      next.days = next.days.map((d, i) => ({ ...d, title: 'Day ' + (i + 1) }));
      return persist(next);
    });
  }, [persist]);

  const assignActivity = useCallback((dayIndex, slot, activity) => {
    setItinerary(prev => {
      if (!prev) return prev;
      const days = prev.days.map((d, i) =>
        i === dayIndex ? { ...d, [slot]: { ...activity } } : d
      );
      return persist({ ...prev, days });
    });
  }, [persist]);

  const removeActivity = useCallback((dayIndex, slot) => {
    setItinerary(prev => {
      if (!prev) return prev;
      const days = prev.days.map((d, i) =>
        i === dayIndex ? { ...d, [slot]: null } : d
      );
      return persist({ ...prev, days });
    });
  }, [persist]);

  const updateDayTitle = useCallback((dayIndex, title) => {
    setItinerary(prev => {
      if (!prev) return prev;
      const days = prev.days.map((d, i) =>
        i === dayIndex ? { ...d, title } : d
      );
      return persist({ ...prev, days });
    });
  }, [persist]);

  return {
    itinerary,
    init,
    save,
    clear,
    addDay,
    removeDay,
    assignActivity,
    removeActivity,
    updateDayTitle,
  };
}
