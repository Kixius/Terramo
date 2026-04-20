import { useMemo, useState } from 'react';
import useExchangeRates from '../hooks/useExchangeRates';
import currencyMap from '../data/currencyMap';

const AMOUNTS = [1, 5, 10, 50, 100];

const POPULAR_CURRENCIES = [
  'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY',
  'SEK', 'NOK', 'DKK', 'PLN', 'CZK', 'HUF', 'TRY', 'BRL',
  'THB', 'INR', 'KRW', 'ZAR',
];

function getUserCurrency() {
  try {
    return Intl.NumberFormat(undefined, { style: 'currency' }).resolvedOptions().currency;
  } catch {
    return 'USD';
  }
}

export default function CurrencyConverter({ cityCurrency }) {
  const { convert, rates, loading } = useExchangeRates();
  const cityCode = currencyMap[cityCurrency];
  const detectedCurrency = useMemo(() => getUserCurrency(), []);
  const [targetCurrency, setTargetCurrency] = useState(detectedCurrency);

  if (!cityCode || loading || !rates) return null;

  // Build list of currencies: target first, then popular ones, then city's currency
  const availableCurrencies = [...new Set([targetCurrency, ...POPULAR_CURRENCIES, cityCode])]
    .filter(c => rates[c])
    .sort();

  return (
    <div className="info-card currency-card">
      <div className="currency-header">
        <h3>Currency Converter</h3>
        <select
          className="currency-select"
          value={targetCurrency}
          onChange={e => setTargetCurrency(e.target.value)}
        >
          {availableCurrencies.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <p className="currency-pair">{cityCode} → {targetCurrency}</p>
      <div className="currency-table">
        {AMOUNTS.map(amt => {
          const result = convert(amt, cityCode, targetCurrency);
          return (
            <div key={amt} className="currency-row">
              <span>{amt} {cityCode}</span>
              <span className="currency-arrow">→</span>
              <span>{result !== null ? result.toFixed(2) : '—'} {targetCurrency}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
