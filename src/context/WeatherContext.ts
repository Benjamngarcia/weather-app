import { createContext } from "react";
import { InfoRequestData } from "../types/weather_types";


// Initial weatherInfo object structure with empty placeholders
const weatherInfo = {
  infoRequestWeather: {
    weatherInfo: null,
    forecastInfo: null,
  }, // Placeholder for weather data
  getWeather: () => {}, // Placeholder for the function
}

// Create a React context using the initial weatherInfo
const WeatherContext = createContext<InfoRequestData>(weatherInfo);

export default WeatherContext;
