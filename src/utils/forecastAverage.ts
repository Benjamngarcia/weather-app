import { WeatherListData } from "../types/weather_types";

export const forecastAverage = (dataList: WeatherListData[]): any[] => {
  // Initialize an object to group weather data by date
  const groupedData: { [date: string]: WeatherListData[] } = {};

  // Loop through each weather data object
  dataList.forEach(obj => {
    // Extract the date from the object
    const date = new Date(obj.dt_txt);
    const dateString = date.toISOString().substring(0, 10);

    // Group weather data by date
    if (!groupedData[dateString]) {
      groupedData[dateString] = [];
    }
    groupedData[dateString].push(obj);
  });

  // Calculate values and create a new array for the average forecast
  const result: any[] = [];

  // Loop through each group of weather data
  for (const date in groupedData) {
    const objectsForDay = groupedData[date];

    // Calculate average temperature
    const temperatures = objectsForDay.map(obj => obj.main.temp);
    const averageTemp = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;

    // Calculate average humidity
    const humidity = objectsForDay.reduce((sum, obj) => sum + obj.main.humidity, 0) / objectsForDay.length;

    // Calculate the most common weather ID for the day
    const weatherIds = objectsForDay.map(obj => obj.weather[0].id);
    const mostCommonWeatherId = weatherIds.reduce((prev, curr) =>
      weatherIds.filter(id => id === prev).length >= weatherIds.filter(id => id === curr).length ? prev : curr
    );

    // Calculate minimum and maximum temperatures for the day
    const tempMin = Math.min(...temperatures);
    const tempMax = Math.max(...temperatures);

    // Format the date for display
    const formattedDate = new Date(date).toLocaleDateString('en-US', { day: 'numeric', weekday: 'short' });

    // Create an entry for the day in the result array
    result.push({
      dt_txt: formattedDate,
      main: {
        temp: averageTemp,
        feels_like: averageTemp,
        temp_min: tempMin,
        temp_max: tempMax,
        pressure: objectsForDay[0].main.pressure,
        humidity: humidity,
        temp_kf: 0,
      },
      weather: [{ id: mostCommonWeatherId, main: "", description: "", icon: "" }],
    });
  }

  result.shift(); // Remove the first entry (first day)

  return result;
};
