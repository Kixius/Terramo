import emergencyContacts from '../data/emergencyContacts';

export default function EmergencyCard({ city }) {
  const cityData = emergencyContacts[city.name] || {};
  const countryData = emergencyContacts[city.country];
  if (!countryData) return null;

  const merged = { ...countryData, ...cityData };
  const numbers = [
    { label: 'General Emergency', number: merged.general, icon: '🆘' },
    { label: 'Police', number: merged.police, icon: '👮' },
    { label: 'Ambulance', number: merged.ambulance, icon: '🚑' },
    { label: 'Fire', number: merged.fire, icon: '🚒' },
  ];

  return (
    <div className="emergency-card">
      <h3 className="emergency-title">
        <span className="emergency-title-icon">🏥</span> Emergency Info
      </h3>
      <div className="emergency-numbers-grid">
        {numbers.map(({ label, number, icon }) => (
          <a key={label} href={`tel:${number}`} className="emergency-number-item">
            <span className="emergency-number-icon">{icon}</span>
            <span className="emergency-number-label">{label}</span>
            <span className="emergency-number-value">{number}</span>
          </a>
        ))}
      </div>
      {merged.hospitals && merged.hospitals.length > 0 && (
        <div className="emergency-hospitals">
          <h4>Major Hospitals</h4>
          {merged.hospitals.map((h, i) => (
            <div key={i} className="emergency-hospital-item">
              <span className="hospital-name">{h.name}</span>
              <a href={`tel:${h.phone}`} className="hospital-phone">{h.phone}</a>
              <span className="hospital-address">{h.address}</span>
            </div>
          ))}
        </div>
      )}
      {merged.notes && (
        <p className="emergency-notes">{merged.notes}</p>
      )}
    </div>
  );
}
