import useWeather from '../hooks/useWeather';
import { WeatherIcon } from './WeatherIcon';
import {
  IconDropletFilled,
  IconArrowBigUpFilled,
  IconArrowBigDownFilled,
  IconZoomExclamation
} from '@tabler/icons-react';

export const CurrentWeather = () => {

  // Fetch weather data using custom hook
  const { infoRequestWeather } = useWeather();
  const { weatherInfo } = infoRequestWeather;

  // If weather data is not available, return null (no display)
  if (weatherInfo === null) return null;

  const isRequestSuccess = 'weather' in weatherInfo;

  return (
    <div className="flex flex-col items-center justify-center text-gray-700 dark:text-gray-200 py-4 mt-3">
      <div className="w-full p-10 rounded-xl ring-8 ring-white ring-opacity-40">
        {isRequestSuccess ? (
          <>
            <div className="flex flex-col-reverse justify-between sm:flex-row text-center sm:text-left items-center">
              <div className="flex flex-col">
                <span className="text-4xl font-bold sm:text-6xl">{Math.round(weatherInfo.main.temp)}°</span>
                <div className="flex flex-col">
                  <span className="font-semibold mt-1 text-gray-500 dark:text-gray-300">{weatherInfo.name}, {weatherInfo.sys.country}</span>
                  <span className="font-semibold mt-1 text-gray-500 dark:text-gray-300">{weatherInfo.weather[0].main}</span>
                </div>
              </div>
              <div className="mx-auto sm:mx-0">
                <WeatherIcon code={weatherInfo.weather[0].id} big />
              </div>
            </div>
            <div className="flex justify-between mt-4 flex-col sm:flex-row text-center sm:text-left">
              <div className="flex flex-col">
                <p>
                  <span className="font-semibold text-gray-500 dark:text-gray-300">Feels like {Math.round(weatherInfo.main.feels_like)}°</span>
                </p>
                <p className='flex mx-auto'>
                  <IconDropletFilled className='text-gray-500 text-xs dark:text-gray-300' />
                  <span className="font-semibold text-gray-500 dark:text-gray-300">Humidity: {Math.round(weatherInfo.main.humidity)}%</span>
                </p>
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex gap-6 mx-auto">
                  <p className="flex items-center text-3xl text-gray-500 dark:text-gray-300">
                    <IconArrowBigDownFilled className="text-sky-500" /> {Math.round(weatherInfo.main.temp_min)}°
                  </p>
                  <p className="flex items-center text-3xl text-gray-500 dark:text-gray-300">
                    <IconArrowBigUpFilled className='text-red-500' /> {Math.round(weatherInfo.main.temp_max)}°
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <IconZoomExclamation className="w-24 h-24 mx-auto text-red-500" />
            <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mt-3">
              {weatherInfo.response.data.message.toUpperCase()}
            </h1>
          </div>
        )}
      </div>
    </div>
  )
}
