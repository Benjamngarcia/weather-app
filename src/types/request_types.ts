export interface RequestData {
  city: string | { lat: number, lon: number };
  //metric is for Celsius, imperial is for Fahrenheit
  units: "metric" | "imperial";
}