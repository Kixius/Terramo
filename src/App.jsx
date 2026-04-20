import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import IntroScreen from './components/IntroScreen';
import OfflineIndicator from './components/OfflineIndicator';
import useTheme from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className={`app${introDone ? ' intro-done' : ''}`}>
      {!introDone && <IntroScreen onComplete={() => setIntroDone(true)} />}
      <OfflineIndicator />
      <main className="main-content">
        <Outlet context={{ theme, toggleTheme }} />
      </main>
    </div>
  );
}
