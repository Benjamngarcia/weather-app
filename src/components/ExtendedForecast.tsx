import useWeather from '../hooks/useWeather';
import { forecastAverage } from '../utils/forecastAverage';
import { IconDropletFilled } from '@tabler/icons-react';
import { WeatherIcon } from './WeatherIcon';

export const ExtendedForecast = () => {
  const { infoRequestWeather } = useWeather();
  const { forecastInfo } = infoRequestWeather;

  // Check if forecastInfo.list exists before using it
  if (!forecastInfo?.list) {
    return null; // Return nothing if forecast data is unavailable
  }

  // Calculate average forecast data
  const avgForecast = forecastAverage(forecastInfo.list);

  return (
    <div className="flex flex-row rounded py-4 px-1 mt-4 ring-8 ring-white ring-opacity-40 overflow-x-scroll gap-2">
      {avgForecast.map((day, index) => (
        // Display forecast information for each day
        <div className="mx-auto px-3 shadow-sm text-center rounded" key={index}>
          <span className="font-semibold text-md text-gray-500 dark:text-gray-300">{day.dt_txt}</span>
          <div className="flex text-gray-500 dark:text-gray-300">
            <IconDropletFilled className="text-sky-500" />
            <span className="font-semibold">{Math.round(day.main.humidity)}%</span>
          </div>
          <WeatherIcon code={day.weather} /> {/* Display weather icon */}
          <span className="font-semibold text-md text-gray-500 dark:text-gray-300">
            {Math.round(day.main.temp_min)}° / {Math.round(day.main.temp_max)}°
          </span>
        </div>
      ))}
    </div>
  );
};
