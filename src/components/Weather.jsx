import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const Weather = ({ cityName }) => {  
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = '6a382847051f1a4fcf8df994ff42cb9f';  

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: cityName,  
            appid: apiKey,
            units: 'metric'
          }
        });
        setWeather(response.data);
      } catch (error) {
        setError(`Une erreur s'est produite lors de la récupération des données météo: ${error.response ? error.response.data.message : error.message}`);
      }
    };

    fetchWeather();
  }, [cityName, apiKey]);

  if (error) return <div className="text-danger text-center">{error}</div>;
  if (!weather) return <div className="text-center">Loading...</div>;

  return (
    <div className="weather-container">
      <div className="weather-box">
        <h2>{weather.name}, {weather.sys.country}</h2>
        <p><strong>{weather.weather[0].description}</strong></p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Icône météo" />
        <p><strong>Température:</strong> {weather.main.temp}°C</p>
        <p><strong>Humidité:</strong> {weather.main.humidity}%</p>
        <p><strong>Vitesse du vent:</strong> {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default Weather;
