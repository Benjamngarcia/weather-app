import { useState, useMemo, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Header } from "./components/weatherComponent/Header";
import { InputSearch } from "./components/weatherComponent/InputSearch";
import { CurrentWeather } from './components/weatherComponent/CurrentWeather';
import { ExtendedForecast } from './components/weatherComponent/ExtendedForecast';
import { Footer } from './components/generalComponents/Footer';
import { PageNotFound } from "./components/generalComponents/PageNotFound";
import { getCurrentWeather, getCurrentForecast } from "./api/currentWeather";
import WeatherContext from "./context/WeatherContext";
import { WeatherDataResponse, ForecastDataResponse, InfoResponseData, ErrorResponse } from './types/weather_types';

// Initial state values retrieved from localStorage
const initialStateDarkMode: boolean = localStorage.getItem("theme") === "dark";
const initialStateCity: string | { lat: number, lon: number } = JSON.parse(localStorage.getItem("city") || "{}");

function App() {
  // State variables for weather information, forecast information, and dark mode
  const [weatherInfo, setWeatherInfo] = useState<WeatherDataResponse | ErrorResponse | null>(null);
  const [forecastInfo, setForecastInfo] = useState<ForecastDataResponse | ErrorResponse | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(initialStateDarkMode);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to fetch weather and forecast data
  const getWeather = async (city: string | { lat: number, lon: number }) => {
    setLoading(true);
    localStorage.setItem("city", JSON.stringify(city));
    let weatherReq = await getCurrentWeather({ city, units: "metric" });
    let forecastReq = await getCurrentForecast({ city, units: "metric" });
    setWeatherInfo(weatherReq);
    setForecastInfo(forecastReq);
    setLoading(false);
  };

  // Combine weather and forecast information for easy access
  let infoRequestWeather: InfoResponseData = {
    infoRequestWeather: {
      weatherInfo,
      forecastInfo,
    },
    getWeather,
    loading,
  };

  // Memoized weather data to avoid unnecessary recalculations
  useMemo(() => ({
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
      setLoading(true);
      getWeather(initialStateCity);
      setLoading(false);
    }
  }, []);

  // App structure and routing
  return (
    <WeatherContext.Provider value={infoRequestWeather}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={
              <>
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <InputSearch />
                <CurrentWeather />
                {forecastInfo && !loading && <ExtendedForecast />}
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
