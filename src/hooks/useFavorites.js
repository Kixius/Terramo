import { useState, useCallback } from 'react';

const STORAGE_KEY = 'terramo-favorites';

function loadFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveFavorites(favs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...favs]));
}

export default function useFavorites() {
  const [favorites, setFavorites] = useState(loadFavorites);

  const toggleFavorite = useCallback((cityId) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(cityId)) next.delete(cityId);
      else next.add(cityId);
      saveFavorites(next);
      return next;
    });
  }, []);

  const isFavorite = useCallback((cityId) => favorites.has(cityId), [favorites]);

  return { favorites, toggleFavorite, isFavorite };
}
