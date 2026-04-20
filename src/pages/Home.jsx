import { useState, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import WorldMap from '../components/WorldMap';
import SearchBar from '../components/SearchBar';
import useFavorites from '../hooks/useFavorites';
import cities from '../data/cities';
import logo from '/images/Logo.png';

export default function Home() {
  const { theme, toggleTheme } = useOutletContext();
  const [search, setSearch] = useState('');
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const filtered = useMemo(() => {
    let result = cities;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(city =>
        city.name.toLowerCase().includes(q) ||
        city.country.toLowerCase().includes(q) ||
        city.continent.toLowerCase().includes(q)
      );
    }
    if (showSavedOnly) {
      result = result.filter(city => favorites.has(city.id));
    }
    return result;
  }, [search, showSavedOnly, favorites]);

  return (
    <div className="home">
      <div className="map-search-overlay">
        <SearchBar value={search} onChange={setSearch} placeholder="Search cities or countries..." />
        <button
          className={`saved-filter-btn${showSavedOnly ? ' active' : ''}`}
          onClick={() => setShowSavedOnly(!showSavedOnly)}
        >
          ♥ Saved{favorites.size > 0 ? ` (${favorites.size})` : ''}
        </button>
      </div>
      <div className="map-controls-overlay">
        <img src={logo} alt="Terramo" className="map-home-logo" />
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
      <WorldMap cities={filtered} isFavorite={isFavorite} onToggleFavorite={toggleFavorite} />
    </div>
  );
}
