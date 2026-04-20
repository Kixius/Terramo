import { useState, useCallback } from 'react';

const STORAGE_KEY = 'terramo-trips';

function loadTrips() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveTrips(trips) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
}

export default function useTrips() {
  const [trips, setTrips] = useState(loadTrips);

  const createTrip = useCallback((name, cityIds = []) => {
    setTrips(prev => {
      const trip = {
        id: 'trip-' + Date.now(),
        name,
        cities: cityIds,
        notes: {},
        createdAt: new Date().toISOString(),
      };
      const next = [...prev, trip];
      saveTrips(next);
      return next;
    });
  }, []);

  const deleteTrip = useCallback((tripId) => {
    setTrips(prev => {
      const next = prev.filter(t => t.id !== tripId);
      saveTrips(next);
      return next;
    });
  }, []);

  const addCityToTrip = useCallback((tripId, cityId) => {
    setTrips(prev => {
      const next = prev.map(t =>
        t.id === tripId && !t.cities.includes(cityId)
          ? { ...t, cities: [...t.cities, cityId] }
          : t
      );
      saveTrips(next);
      return next;
    });
  }, []);

  const removeCityFromTrip = useCallback((tripId, cityId) => {
    setTrips(prev => {
      const next = prev.map(t =>
        t.id === tripId
          ? { ...t, cities: t.cities.filter(id => id !== cityId) }
          : t
      );
      saveTrips(next);
      return next;
    });
  }, []);

  const updateTripNote = useCallback((tripId, cityId, note) => {
    setTrips(prev => {
      const next = prev.map(t =>
        t.id === tripId
          ? { ...t, notes: { ...t.notes, [cityId]: note } }
          : t
      );
      saveTrips(next);
      return next;
    });
  }, []);

  const renameTrip = useCallback((tripId, newName) => {
    setTrips(prev => {
      const next = prev.map(t =>
        t.id === tripId ? { ...t, name: newName } : t
      );
      saveTrips(next);
      return next;
    });
  }, []);

  return { trips, createTrip, deleteTrip, addCityToTrip, removeCityFromTrip, updateTripNote, renameTrip };
}
