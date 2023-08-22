import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import { InfoRequestData } from '../types/weather_types';

export default () : InfoRequestData => useContext(WeatherContext);