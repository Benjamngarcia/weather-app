import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import { InfoResponseData } from '../types/weather_types';

export default () : InfoResponseData => useContext(WeatherContext);