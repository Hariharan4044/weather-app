// src/components/Forecast.js
import React from "react";

const Forecast = ({ data }) => {
  return (
    <div className="forecast">
      <h4>📆 5-Day Forecast</h4>
      <div className="forecast-grid">
        {data.map((item, index) => (
          <div key={index} className="forecast-card">
            <p>{new Date(item.dt_txt).toDateString()}</p>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt=""
            />
            <p>{item.main.temp} °C</p>
            <p>{item.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
