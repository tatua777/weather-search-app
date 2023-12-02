import React, { useState } from 'react';
import axios from 'axios';

const WeatherSearch: React.FC = () => {
  const [cities, setCities] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any>(null);

  const searchWeather = async () => {
    try {
      const response = await axios.get(`/weather?city=${cities}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city names (comma-separated)"
        value={cities}
        onChange={(e) => setCities(e.target.value)}
      />
      <button onClick={searchWeather}>Search</button>

      {weatherData && (
        <div>
          <h2>Weather Results</h2>
          <table>
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature (°C)</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{weatherData.location.name}</td>
                <td>{weatherData.current.temp_c}</td>
                <td>{weatherData.current.condition.text}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WeatherSearch;
