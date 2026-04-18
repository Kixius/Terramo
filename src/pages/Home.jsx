import WorldMap from '../components/WorldMap';
import cities from '../data/cities';

export default function Home() {
  return (
    <div className="home">
      <WorldMap cities={cities} />
    </div>
  );
}
