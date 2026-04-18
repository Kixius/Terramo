import transport from '../data/transport';

export default function TransportInfo({ city }) {
  const data = transport[city.name] || transport[city.country];
  if (!data) return null;

  const merged = { ...transport[city.country], ...data };

  return (
    <section className="city-section">
      <h2>Getting Around</h2>
      <div className="transport-grid">
        <div className="transport-card">
          <span className="transport-icon">🚌</span>
          <h4>Bus</h4>
          <p className="transport-price">{merged.busSingle}</p>
          <p className="transport-label">single ride</p>
          {merged.busDayPass && <p className="transport-price">{merged.busDayPass} <span className="transport-label">/ day</span></p>}
        </div>
        {merged.metroAvailable && (
          <div className="transport-card">
            <span className="transport-icon">🚇</span>
            <h4>Metro / Tram</h4>
            <p className="transport-price">{merged.metroDayPass || merged.busDayPass}</p>
            <p className="transport-label">day pass</p>
          </div>
        )}
        <div className="transport-card">
          <span className="transport-icon">🚕</span>
          <h4>Taxi</h4>
          <p className="transport-price">{merged.taxiBase}</p>
          <p className="transport-label">base fare</p>
          <p className="transport-price">{merged.taxiPerKm} <span className="transport-label">/ km</span></p>
        </div>
        <div className="transport-card">
          <span className="transport-icon">🚲</span>
          <h4>Bike Rental</h4>
          <p className="transport-bike-brand">{merged.bikeRental}</p>
          <p className="transport-price">{merged.bikeRentalCost}</p>
        </div>
        <div className="transport-card walkability-card">
          <span className="transport-icon">🚶</span>
          <h4>Walkability</h4>
          <span className={`walkability-badge ${merged.walkability}`}>{merged.walkability}</span>
          <p className="transport-walk-note">{merged.walkNote}</p>
        </div>
      </div>
    </section>
  );
}
