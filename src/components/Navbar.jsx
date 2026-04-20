import { Link } from 'react-router-dom';
import logo from '/images/Logo.png';

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Terramo" className="logo-img" />
      </Link>
      <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle dark mode">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}
