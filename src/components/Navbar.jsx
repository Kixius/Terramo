import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/images/Logo.png" alt="Terramo" className="logo-img" />
      </Link>
    </nav>
  );
}
