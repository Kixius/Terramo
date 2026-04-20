import { useState, useEffect } from 'react';
import logo from '/images/Logo.png';

export default function IntroScreen({ onComplete }) {
  const [phase, setPhase] = useState('visible');

  useEffect(() => {
    if (phase === 'exiting') {
      const timer = setTimeout(() => {
        setPhase('gone');
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  if (phase === 'gone') return null;

  return (
    <div className={`intro-screen${phase === 'exiting' ? ' exiting' : ''}`}>
      <div className="intro-content">
        <img src={logo} alt="Terramo" className="intro-logo" />
        <button className="intro-btn" onClick={() => setPhase('exiting')}>
          Let's travel together
        </button>
      </div>
    </div>
  );
}
