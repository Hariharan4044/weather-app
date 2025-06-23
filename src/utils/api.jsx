// src/utils/api.js
const API_KEY = "5d7c65820c7e3c8f76b0664b8962c69d";

export const getCurrentWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) throw new Error("City not found");
  return response.json();
};

export const getForecast = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) throw new Error("City not found");
  return response.json();
};
