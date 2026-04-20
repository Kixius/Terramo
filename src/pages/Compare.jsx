import { useState } from 'react';
import { Link } from 'react-router-dom';
import CityCompareModal from '../components/CityCompareModal';
import CityComparison from '../components/CityComparison';

export default function Compare() {
  const [comparison, setComparison] = useState(null);

  return (
    <div className="compare-page">
      <div className="compare-header-bar">
        <Link to="/" className="back-link">← Back to Map</Link>
        <h1>Compare Cities</h1>
      </div>

      {comparison ? (
        <div className="compare-results">
          <CityComparison city1={comparison.city1} city2={comparison.city2} />
          <button className="compare-again-btn" onClick={() => setComparison(null)}>
            Compare Different Cities
          </button>
        </div>
      ) : (
        <CityCompareModal onSelect={(c1, c2) => setComparison({ city1: c1, city2: c2 })} />
      )}
    </div>
  );
}
