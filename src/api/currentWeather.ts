import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { RequestData } from '../types/request_types';

export const getCurrentWeather = async (params : RequestData) => {
  const { city, units } = params;
  try {
    if (typeof city === 'object') {
      let response = await axios.get(`${BASE_URL}weather?lat=${city.lat}&lon=${city.lon}&units=${units}&appid=${import.meta.env.VITE_APP_API_KEY}`);
      return response.data;
    } else {
      let response = await axios.get(`${BASE_URL}weather?q=${city}&units=${units}&appid=${import.meta.env.VITE_APP_API_KEY}`);
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}

export const getCurrentForecast = async (params : RequestData) => {
  const { city, units } = params;
  try {
    if (typeof city === 'object') {
      const response = await axios.get(`${BASE_URL}forecast?lat=${city.lat}&lon=${city.lon}&units=${units}&appid=${import.meta.env.VITE_APP_API_KEY}`);
      return response.data;
    } else {
      let response = await axios.get(`${BASE_URL}forecast?q=${city}&units=${units}&appid=${import.meta.env.VITE_APP_API_KEY}`);
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}