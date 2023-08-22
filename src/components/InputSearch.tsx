import { useState } from "react";
import { IconSearch } from '@tabler/icons-react';
import useWeather from "../hooks/useWeather";

// Component for search input
export const InputSearch = () => {
  // Access the getWeather function from the useWeather hook
  const { getWeather } = useWeather();

  // State to store the city name
  const [city, setCity] = useState("");

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (city.trim() === "") {
      return; // Prevent empty submissions
    }
    getWeather(city.trim()); // Get weather for the specified city
  };

  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value); // Update the city state
  };

  return (
    <div className="flex items-center justify-center">
      <form className="w-full mt-4" onSubmit={handleSubmit}>
        <div className="relative">
          {/* Icon for search */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <IconSearch className="text-gray-700 dark:text-gray-300" />
          </div>
          {/* Search input */}
          <input
            type="search"
            id="search"
            placeholder="Type a city name..."
            onChange={handleChange}
            className="block w-full p-4 pl-10 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 rounded-lg bg-transparent 
            focus:ring-sky-400 focus:border-sky-500 focus:outline-none"
            required
          />
          {/* Search button */}
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-300 
            font-medium rounded-lg text-sm px-4 py-2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
