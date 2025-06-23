import React, { useState } from "react";
import { getCurrentWeather, getForecast } from "./utils/api";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Loader from "./components/Loader";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const current = await getCurrentWeather(city.trim());
      const forecastData = await getForecast(city.trim());
      const daily = forecastData.list.filter((reading, index) => index % 8 === 0); // 5-day forecast
      setWeather(current);
      setForecast(daily);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast([]);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h2>Weather App</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {weather && <CurrentWeather data={weather} />}
      {forecast.length > 0 && <Forecast data={forecast} />}
    </div>
  );
};

export default App;
