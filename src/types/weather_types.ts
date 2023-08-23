/* type to save context data for request weather and 
forecast info */
export type InfoResponseData = {
  infoRequestWeather: {
    weatherInfo: WeatherDataResponse | ErrorResponse | null;
    forecastInfo: ForecastDataResponse | ErrorResponse | null;
  };
  getWeather: (city: string | { lat: number, lon: number }) => void;
}

// type for api data
export type WeatherDataResponse = {
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
}

export type ForecastDataResponse = {
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
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
  cnt: number;
  cod: string;
  message: number;
}

export type ErrorResponse = {
  code: string;
  config?: {}
  message: string;
  name: string;
  request: {};
  response: {
    data: {
      cod: string;
      message: string;
    };
    headers: {};
    request: {};
    status: number;
    statusText: string;
    stack?: string;
  }
}

// used only for get the forecast average data
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