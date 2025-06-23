// src/components/CurrentWeather.js
import React from "react";

const CurrentWeather = ({ data }) => {
  const { name, main, weather, wind } = data;
  return (
    <div className="weather-card">
      <h3>📍 {name}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />
      <p>🌡️ Temp: {main.temp} °C</p>
      <p>💧 Humidity: {main.humidity} %</p>
      <p>🌬️ Wind Speed: {wind.speed} m/s</p>
      <p>📖 {weather[0].description}</p>
    </div>
  );
};

export default CurrentWeather;
