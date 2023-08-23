import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import WeatherContext from '../../context/WeatherContext'; // Import the WeatherContext
import { ExtendedForecast } from './ExtendedForecast'; // Import the ExtendedForecast component

const weatherInfo = {
  coord: {
    lon: -122.08,
    lat: 37.39
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d"
    }
  ],
  base: "stations",
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100
  },
  visibility: 16093,
  wind: {
    speed: 1.5,
    deg: 350
  },
  clouds: {
    all: 1
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    country: "US",
    sunrise: 1560343627,
    sunset: 1560396563
  },
  timezone: -25200,
  id: 420006353,
  name: "Mountain View",
  cod: 200
};

const forecastInfo = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1560350645,
      dt_txt: "2019-06-12 15:00:00",
      main: {
        temp: 282.55,
        feels_like: 281.86,
        temp_min: 280.37,
        temp_max: 284.26,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1022,
        humidity: 100,
        temp_kf: 3.89
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      wind: {
        speed: 1.5,
        deg: 350
      },
      sys: {
        country: "US",
        sunrise: 1560343627,
        sunset: 1560396563
      },
      name: "Mountain View"
    },
    {
      dt: 1560361445,
      main: {
        temp: 282.42,
        feels_like: 281.65,
        temp_min: 280.37,
        temp_max: 283.98,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1022,
        humidity: 100,
        temp_kf: 3.61
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      wind: {
        speed: 1.42,
        deg: 9
      },
      sys: {
        country: "US",
        sunrise: 1560343627,
        sunset: 1560396563
      },
      dt_txt: "2019-06-12 18:00:00",
      name: "Mountain View"
    },
    {
      dt: 1560372245,
      main: {
        temp: 282.19,
        feels_like: 281.4,
        temp_min: 280.37,
        temp_max: 283.71,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1022,
        humidity: 100,
        temp_kf: 3.34
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      wind: {
        speed: 1.33,
        deg: 358
      },
      sys: {
        country: "US",
        sunrise: 1560343627,
        sunset: 1560396563
      },
      dt_txt: "2019-06-12 21:00:00",
      name: "Mountain View"
    },
  ],
  city: {
    id: 420006353,
    name: "Mountain View",
    coord: {
      lat: 37.3861,
      lon: -122.0839
    },
    country: "US",
    population: 74066,
    timezone: -25200,
    sunrise: 1560343627,
    sunset: 1560396563
  },
};

// Describe your test suite
describe('ExtendedForecast', () => {
  test('renders ExtendedForecast component', () => {
    render(
      <WeatherContext.Provider value={{ infoRequestWeather: { weatherInfo, forecastInfo }, getWeather: () => { }, loading: false }}>
        {/* Render the ExtendedForecast component */}
        <ExtendedForecast />
      </WeatherContext.Provider>
    );

    // Check if the component renders as expected
    const titleElement = screen.getByText(/Extended forecast/i);
    expect(titleElement).toBeInTheDocument();
  });
});
