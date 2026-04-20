import { useState } from 'react';
import cities from '../data/cities';

export default function CityCompareModal({ onSelect }) {
  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');
  const [city1, setCity1] = useState(null);
  const [city2, setCity2] = useState(null);

  const filterCities = (q) => {
    if (!q) return [];
    const lower = q.toLowerCase();
    return cities.filter(c =>
      c.name.toLowerCase().includes(lower) ||
      c.country.toLowerCase().includes(lower)
    ).slice(0, 8);
  };

  const results1 = filterCities(search1);
  const results2 = filterCities(search2);

  return (
    <div className="compare-selector">
      <div className="compare-column">
        <input
          type="text"
          placeholder="Search first city..."
          value={search1}
          onChange={e => { setSearch1(e.target.value); setCity1(null); }}
          className="compare-input"
        />
        {city1 && <div className="compare-chosen">{city1.emoji} {city1.name}</div>}
        {!city1 && results1.map(c => (
          <button key={c.id} className="compare-option" onClick={() => { setCity1(c); setSearch1(''); }}>
            {c.emoji} {c.name}, {c.country}
          </button>
        ))}
      </div>

      <span className="compare-vs">vs</span>

      <div className="compare-column">
        <input
          type="text"
          placeholder="Search second city..."
          value={search2}
          onChange={e => { setSearch2(e.target.value); setCity2(null); }}
          className="compare-input"
        />
        {city2 && <div className="compare-chosen">{city2.emoji} {city2.name}</div>}
        {!city2 && results2.map(c => (
          <button key={c.id} className="compare-option" onClick={() => { setCity2(c); setSearch2(''); }}>
            {c.emoji} {c.name}, {c.country}
          </button>
        ))}
      </div>

      <button
        className="compare-go-btn"
        disabled={!city1 || !city2}
        onClick={() => city1 && city2 && onSelect(city1, city2)}
      >
        Compare
      </button>
    </div>
  );
}
