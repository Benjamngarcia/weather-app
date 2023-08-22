export type WeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  response: ErrorResponse;
}

export type ErrorResponse = {
  data: {
    cod: string;
    message: string;
  };
}

export type ForecastData = {
  list: {
    dt: number;
    dt_txt: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level: number;
      grnd_level: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
      deg: number;
    };
    sys: {
      country: string;
      sunrise: number;
      sunset: number;
    };
    name: string;
  }[];
  city: {
    id: number;
    name: string;
    coord: {
      lon: number;
      lat: number;
    };
    country: string;
  };
  cnt: number;
  cod: string;
  message: number;
}

export type InfoRequestData = {
  infoRequestWeather: {
    weatherInfo: WeatherData | null;
    forecastInfo: ForecastData | null;
  };
  getWeather: (city: string | { lat: number, lon: number }) => void;
}

export type WeatherListData = {
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}