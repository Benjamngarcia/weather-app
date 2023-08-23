import React from 'react';
import { CloudyIcon } from '../weatherIcons/CloudyIcon';
import { HazeIcon } from '../weatherIcons/HazeIcon';
import { HeavyRainIcon } from '../weatherIcons/HeavyRainIcon';
import { PartlyCloudyIcon } from '../weatherIcons/PartlyCloudyIcon';
import { RainIcon } from '../weatherIcons/RainIcon';
import { SleetIcon } from '../weatherIcons/SleetIcon';
import { SnowIcon } from '../weatherIcons/SnowIcon';
import { SunnyIcon } from '../weatherIcons/SunnyIcon';
import { ThunderIcon } from '../weatherIcons/ThunderIcon';

// Props interface for WeatherIcon component
interface IWeatherIconProps {
  code: number;
  big?: boolean;
}

// Mapping of weather codes to respective SVG weather icons
const weatherIconMap: Record<number, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  // Clear
  800: SunnyIcon,
  // Cloud
  801: PartlyCloudyIcon,
  802: PartlyCloudyIcon,
  803: CloudyIcon,
  804: CloudyIcon,
  // Rain
  500: RainIcon,
  501: RainIcon,
  520: RainIcon,
  511: RainIcon,
  521: RainIcon,
  502: HeavyRainIcon,
  503: HeavyRainIcon,
  504: HeavyRainIcon,
  522: HeavyRainIcon,
  531: HeavyRainIcon,
  //Drizzle
  300: RainIcon,
  301: RainIcon,
  302: RainIcon,
  310: RainIcon,
  311: RainIcon,
  312: RainIcon,
  313: RainIcon,
  314: RainIcon,
  321: RainIcon,
  //Thunderstorm
  200: ThunderIcon,
  201: ThunderIcon,
  202: ThunderIcon,
  210: ThunderIcon,
  211: ThunderIcon,
  212: ThunderIcon,
  221: ThunderIcon,
  230: ThunderIcon,
  231: ThunderIcon,
  232: ThunderIcon,
  //Snow
  600: SnowIcon,
  601: SnowIcon,
  602: SnowIcon,
  612: SnowIcon,
  613: SnowIcon,
  615: SnowIcon,
  616: SnowIcon,
  620: SnowIcon,
  621: SnowIcon,
  622: SnowIcon,
  611: SleetIcon,
  // Atmosphere
  701: HazeIcon,
  711: HazeIcon,
  721: HazeIcon,
  731: HazeIcon,
  741: HazeIcon,
  751: HazeIcon,
  761: HazeIcon,
  762: HazeIcon,
  771: HazeIcon,
  781: HazeIcon,
};

export const WeatherIcon: React.FC<IWeatherIconProps> = ({ code, big }) => {
  // Get the appropriate icon component based on the weather code
  const Icon = weatherIconMap[code] || SunnyIcon;
  // Determine the style of the icon (big or regular size)
  const style = { width: big ? '150px' : '70px', height: big ? '150px' : '70px' };
  // Render the chosen weather icon with the determined style
  return <Icon style={style} />;
};