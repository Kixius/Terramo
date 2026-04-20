export default function CityComparison({ city1, city2 }) {
  const rows = [
    { label: 'Country', v1: city1.country, v2: city2.country },
    { label: 'Continent', v1: city1.continent, v2: city2.continent },
    { label: 'Language', v1: city1.language, v2: city2.language },
    { label: 'Currency', v1: city1.currency, v2: city2.currency },
    { label: 'Best Time', v1: city1.bestTime, v2: city2.bestTime },
    { label: 'Tagline', v1: city1.tagline, v2: city2.tagline },
    {
      label: 'Highlights',
      v1: city1.highlights.slice(0, 5).join(', '),
      v2: city2.highlights.slice(0, 5).join(', '),
    },
    {
      label: 'Foods',
      v1: city1.foods.slice(0, 6).join(', '),
      v2: city2.foods.slice(0, 6).join(', '),
    },
    {
      label: 'Neighborhoods',
      v1: city1.neighborhoods.map(n => n.name).join(', '),
      v2: city2.neighborhoods.map(n => n.name).join(', '),
    },
    {
      label: 'Tips',
      v1: city1.tips.length + ' tips',
      v2: city2.tips.length + ' tips',
    },
  ];

  return (
    <div className="comparison-grid">
      <div className="comparison-header">
        <div />
        <div className="comparison-city-header">
          <span className="comparison-emoji">{city1.emoji}</span>
          {city1.name}
        </div>
        <div className="comparison-city-header">
          <span className="comparison-emoji">{city2.emoji}</span>
          {city2.name}
        </div>
      </div>
      {rows.map((row, i) => (
        <div key={row.label} className={`comparison-row${i % 2 === 1 ? ' alt' : ''}`}>
          <div className="comparison-label">{row.label}</div>
          <div className="comparison-value">{row.v1}</div>
          <div className="comparison-value">{row.v2}</div>
        </div>
      ))}
    </div>
  );
}
