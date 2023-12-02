import React from 'react';
import WeatherSearch from './components/WeatherSearch';
import SearchHistory from './components/SearchHistory';

const App: React.FC = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <WeatherSearch />
      <SearchHistory />
    </div>
  );
};

export default App;
