import { useState, useEffect } from 'react';

const WMO_CODES = {
  0: ['☀️', 'Clear sky'], 1: ['🌤️', 'Mainly clear'], 2: ['⛅', 'Partly cloudy'], 3: ['☁️', 'Overcast'],
  45: ['🌫️', 'Fog'], 48: ['🌫️', 'Depositing rime fog'],
  51: ['🌧️', 'Light drizzle'], 53: ['🌧️', 'Moderate drizzle'], 55: ['🌧️', 'Dense drizzle'],
  61: ['🌧️', 'Slight rain'], 63: ['🌧️', 'Moderate rain'], 65: ['🌧️', 'Heavy rain'],
  66: ['🌧️', 'Freezing rain'], 67: ['🌧️', 'Heavy freezing rain'],
  71: ['🌨️', 'Slight snow'], 73: ['🌨️', 'Moderate snow'], 75: ['🌨️', 'Heavy snow'], 77: ['🌨️', 'Snow grains'],
  80: ['🌦️', 'Slight showers'], 81: ['🌦️', 'Moderate showers'], 82: ['🌦️', 'Violent showers'],
  85: ['🌨️', 'Slight snow showers'], 86: ['🌨️', 'Heavy snow showers'],
  95: ['⛈️', 'Thunderstorm'], 96: ['⛈️', 'Thunderstorm with hail'], 99: ['⛈️', 'Thunderstorm with heavy hail'],
};

export default function WeatherWidget({ coordinates }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!coordinates) return;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lng}&current=temperature_2m,weather_code,wind_speed_10m`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.current) {
          setWeather({
            temp: Math.round(data.current.temperature_2m),
            code: data.current.weather_code,
            wind: Math.round(data.current.wind_speed_10m),
          });
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, [coordinates]);

  if (error) return null;
  if (!weather) return (
    <div className="info-card weather-card">
      <h3>Weather</h3>
      <p className="weather-loading">Loading...</p>
    </div>
  );

  const [icon, label] = WMO_CODES[weather.code] || ['🌡️', 'Unknown'];

  return (
    <div className="info-card weather-card">
      <h3>Weather Now</h3>
      <span className="weather-icon">{icon}</span>
      <p className="weather-temp">{weather.temp}°C</p>
      <p className="weather-desc">{label}</p>
      <p className="weather-wind">Wind: {weather.wind} km/h</p>
    </div>
  );
}
