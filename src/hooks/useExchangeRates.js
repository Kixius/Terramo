import { useState, useEffect, useCallback } from 'react';
import useOnlineStatus from './useOnlineStatus';

const STORAGE_KEY = 'terramo-exchange-rates';
const API_URL = 'https://open.er-api.com/v6/latest/USD';
const MAX_AGE = 24 * 60 * 60 * 1000;

function loadCached() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (Date.now() - data.timestamp > MAX_AGE) return null;
    return data.rates;
  } catch {
    return null;
  }
}

function saveCache(rates) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ rates, timestamp: Date.now() }));
}

export default function useExchangeRates() {
  const isOnline = useOnlineStatus();
  const [rates, setRates] = useState(loadCached);
  const [loading, setLoading] = useState(!rates);

  useEffect(() => {
    if (rates || !isOnline) return;
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        if (data.rates) {
          setRates(data.rates);
          saveCache(data.rates);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [rates, isOnline]);

  const convert = useCallback((amount, from, to) => {
    if (!rates || !from || !to) return null;
    const inUsd = amount / (rates[from] || 1);
    return inUsd * (rates[to] || 1);
  }, [rates]);

  return { rates, loading, convert };
}
