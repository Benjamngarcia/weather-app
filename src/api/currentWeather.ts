import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { WeatherDataResponse, ForecastDataResponse, ErrorResponse } from '../types/weather_types';

interface RequestData {
  city: string | { lat: number, lon: number };
  //metric is for Celsius, imperial is for Fahrenheit
  units: "metric" | "imperial";
}

export const getCurrentWeather = async (params : RequestData): Promise<WeatherDataResponse | ErrorResponse> => {
  const { city, units } = params;
  try {
    if (typeof city === 'object') {
      let response = await axios.get(`${BASE_URL}weather?lat=${city.lat}&lon=${city.lon}&units=${units}&appid=${import.meta.env.VITE_APP_API_KEY}`);
      return response.data as WeatherDataResponse;
    } else {
      let response = await axios.get(`${BASE_URL}weather?q=${city}&units=${units}&appid=${import.meta.env.VITE_APP_API_KEY}`);
      return response.data as WeatherDataResponse;
    }
  } catch (error) {
    console.error(error);
    return error as ErrorResponse;
  }
}

export const getCurrentForecast = async (params : RequestData): Promise<ForecastDataResponse | ErrorResponse> => {
  const { city, units } = params;
  try {
    if (typeof city === 'object') {
      const response = await axios.get(`${BASE_URL}forecast?lat=${city.lat}&lon=${city.lon}&units=${units}&appid=${import.meta.env.VITE_APP_API_KEY}`);
      return response.data as ForecastDataResponse;
    } else {
      let response = await axios.get(`${BASE_URL}forecast?q=${city}&units=${units}&appid=${import.meta.env.VITE_APP_API_KEY}`);
      return response.data as ForecastDataResponse;
    }
  } catch (error) {
    console.error(error);
    return error as ErrorResponse;
  }
}