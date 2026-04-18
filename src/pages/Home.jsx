import { useState, useMemo } from 'react';
import WorldMap from '../components/WorldMap';
import SearchBar from '../components/SearchBar';
import cities from '../data/cities';

export default function Home() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search) return cities;
    const q = search.toLowerCase();
    return cities.filter(city =>
      city.name.toLowerCase().includes(q) ||
      city.country.toLowerCase().includes(q) ||
      city.continent.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="home">
      <div className="map-search-overlay">
        <SearchBar value={search} onChange={setSearch} placeholder="Search cities or countries..." />
      </div>
      <WorldMap cities={filtered} />
    </div>
  );
}
