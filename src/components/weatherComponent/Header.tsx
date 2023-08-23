import { IconCurrentLocation, IconSunHigh, IconMoon } from '@tabler/icons-react';
import useWeather from '../../hooks/useWeather';

// Props interface for the Header component
type DarkModeProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = (props: DarkModeProps) => {
  const { darkMode, setDarkMode } = props;

  // Access the getWeather function from the useWeather hook
  const { getWeather } = useWeather();

  // Handle the click event for getting weather based on current location
  const handleCurrentLocation: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        // Obtain latitude and longitude from geolocation
        const location = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };
        // Get weather based on the obtained location
        getWeather(location);
      });
    } else {
      console.warn("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="header flex justify-between">
      <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-300">
        Weather App
      </h1>
      <div className="flex items-center gap-4">
        {/* Button for retrieving weather based on current location */}
        <button
          type="button"
          onClick={handleCurrentLocation}
          className="text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-300 
          font-medium rounded-lg text-sm px-4 py-2 flex items-center">
          <IconCurrentLocation className="mr-1" />
          Location
        </button>
        {/* Button for toggling dark mode */}
        <button className="p-1 border-solid border rounded border-sky-400 bg-sky-400 hover:bg-sky-500" onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode ? (
              <IconMoon className="text-gray-200 hover:text-gray-100" />
            ) : (
              <IconSunHigh className="text-gray-200 hover:text-gray-100" />
            )
          }
        </button>
      </div>
    </div>
  );
};
