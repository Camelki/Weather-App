import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Weather from './Weather';
import './style.css';

const WeatherPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const cityName = params.get('cityName');
  const [inputCity, setInputCity] = useState('');

  const handleSearch = () => {
    if (inputCity) {
      window.location.href = `/weather?cityName=${inputCity}`;
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Weather App</h1>
      <div className="text-center">
        <input 
          type="text" 
          className="form-control my-2" 
          placeholder="Choose your city"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />
        <button 
          className="btn btn-primary2"
          onClick={handleSearch}>
          Get Weather
        </button>
      </div>
      {cityName && <Weather cityName={cityName} />}
    </div>
  );
};

export default WeatherPage;
