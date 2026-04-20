import { useState } from 'react';
import useExchangeRates from '../hooks/useExchangeRates';
import currencyMap from '../data/currencyMap';

const TIERS = [
  { key: 'low', label: 'Budget', icon: '🎒', color: '#2e7d32' },
  { key: 'mid', label: 'Mid-range', icon: '🏨', color: '#e65100' },
  { key: 'high', label: 'Luxury', icon: '✨', color: '#6a1b9a' },
];

const CATEGORIES = [
  { key: 'accommodation', label: 'Accommodation', icon: '🛏️' },
  { key: 'food', label: 'Food & Drinks', icon: '🍽️' },
  { key: 'attractions', label: 'Attractions', icon: '🏛️' },
  { key: 'transport', label: 'Transport', icon: '🚌' },
];

function getUserCurrency() {
  try {
    return Intl.NumberFormat(undefined, { style: 'currency' }).resolvedOptions().currency;
  } catch {
    return 'USD';
  }
}

export default function BudgetCard({ budget, cityCurrency }) {
  const [tier, setTier] = useState('mid');
  const { convert, rates } = useExchangeRates();
  const userCurrency = getUserCurrency();
  const cityCode = currencyMap[cityCurrency];

  const showConversion = rates && cityCode && cityCode !== userCurrency;

  const fmt = (usd) => {
    if (!showConversion) return `$${usd}`;
    const converted = convert(usd, 'USD', userCurrency);
    return converted !== null ? `${Math.round(converted)} ${userCurrency}` : `$${usd}`;
  };

  if (!budget) return null;
  const data = budget[tier];
  const currentTier = TIERS.find(t => t.key === tier);

  return (
    <div className="info-card budget-card">
      <h3>Daily Budget</h3>
      <div className="budget-tiers">
        {TIERS.map(t => (
          <button
            key={t.key}
            className={`budget-tier-btn${tier === t.key ? ' active' : ''}`}
            onClick={() => setTier(t.key)}
            style={tier === t.key ? { borderColor: t.color, color: t.color } : {}}
          >
            <span className="budget-tier-icon">{t.icon}</span>
            <span className="budget-tier-label">{t.label}</span>
          </button>
        ))}
      </div>
      <div className="budget-breakdown">
        {CATEGORIES.map(cat => (
          <div key={cat.key} className="budget-row">
            <span className="budget-cat-icon">{cat.icon}</span>
            <span className="budget-cat-label">{cat.label}</span>
            <span className="budget-cat-value">{fmt(data[cat.key])}</span>
          </div>
        ))}
        <div className="budget-total">
          <span className="budget-cat-icon">💰</span>
          <span className="budget-cat-label"><strong>Total / day</strong></span>
          <span className="budget-cat-value" style={{ color: currentTier.color }}>
            <strong>{fmt(data.total)}</strong>
          </span>
        </div>
      </div>
      {showConversion && (
        <p className="budget-note">Converted from USD to {userCurrency}</p>
      )}
    </div>
  );
}
