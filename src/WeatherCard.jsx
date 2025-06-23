import React from "react";
import "./App.css";

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <div className="weather-card">
      <h3>{name}</h3>
      <p>🌡️ Temp: {main.temp} °C</p>
      <p>💧 Humidity: {main.humidity} %</p>
      <p>🌬️ Wind Speed: {wind.speed} m/s</p>
      <p>📖 Description: {weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
