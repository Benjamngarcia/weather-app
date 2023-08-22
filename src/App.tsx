import { useState, useMemo, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Header } from "./components/Header";
import { InputSearch } from "./components/InputSearch";
import { CurrentWeather } from './components/CurrentWeather';
import { ExtendedForecast } from './components/ExtendedForecast';
import { Footer } from './components/Footer';
import { PageNotFound } from "./components/PageNotFound";
import { getCurrentWeather, getCurrentForecast } from "./api/currentWeather";
import WeatherContext from "./context/WeatherContext";
import { WeatherData, ForecastData, InfoRequestData } from './types/weather_types';

// Initial state values retrieved from localStorage
const initialStateDarkMode: boolean = localStorage.getItem("theme") === "dark";
const initialStateCity: string | { lat: number, lon: number } = JSON.parse(localStorage.getItem("city") || "{}");

function App() {
  // State variables for weather information, forecast information, and dark mode
  const [weatherInfo, setWeatherInfo] = useState<WeatherData | null>(null);
  const [forecastInfo, setForecastInfo] = useState<ForecastData | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(initialStateDarkMode);

  // Combine weather and forecast information for easy access
  let infoRequestWeather: InfoRequestData = { weatherInfo, forecastInfo };

  // Function to fetch weather and forecast data
  const getWeather = async (city: string | { lat: number, lon: number }) => {
    localStorage.setItem("city", JSON.stringify(city));
    let weatherReq = await getCurrentWeather({ city, units: "metric" });
    let forecastReq = await getCurrentForecast({ city, units: "metric" });
    setWeatherInfo(weatherReq);
    setForecastInfo(forecastReq);
  };

  // Memoized weather data to avoid unnecessary recalculations
  const weatherData = useMemo(() => ({
    infoRequestWeather,
    getWeather,
  }), [weatherInfo]);

  // Effect to toggle dark mode and update theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Effect to fetch weather data when the app starts
  useEffect(() => {
    if (initialStateCity && Object.keys(initialStateCity).length > 0) {
      getWeather(initialStateCity);
    }
  }, []);

  // App structure and routing
  return (
    <WeatherContext.Provider value={weatherData}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={
              <>
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <InputSearch />
                <CurrentWeather />
                {forecastInfo && <ExtendedForecast />}
                <Footer />
              </>
            } />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </WeatherContext.Provider>
  );
}

export default App;
