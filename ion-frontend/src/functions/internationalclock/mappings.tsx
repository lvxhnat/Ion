import * as React from 'react';

import {
    WiDaySunny,
    WiCloudy,
    WiCloud,
    WiDaySunnyOvercast,
    WiThermometerExterior,
    WiFog,
    WiDayFog,
    WiRaindrops,
    WiRain,
    WiSnow,
    WiSleet,
    WiHail,
    WiRaindrop,
    WiSnowWind,
    WiSnowflakeCold,
    WiDaySnowThunderstorm,
    WiThunderstorm,
    WiRainWind,
} from 'react-icons/wi';

export const geoMapping: {
    [index: string]: { locale: string; timeZone: string; country_code: string };
} = {
    Singapore: { locale: 'Singapore', timeZone: 'Asia/Singapore', country_code: 'SG' },
    Tokyo: { locale: 'Tokyo', timeZone: 'Asia/Tokyo', country_code: 'JP' },
    London: { locale: 'London', timeZone: 'Europe/London', country_code: 'GB' },
    'New York City': { locale: 'New+York', timeZone: 'America/New_York', country_code: 'US' },
};

export const weatherMapping: { [index: string]: React.ReactElement } = {
    Sunny: <WiDaySunny />,
    Clear: <WiThermometerExterior />,
    'Partly cloudy': <WiCloud />,
    Cloudy: <WiCloudy />,
    Overcast: <WiDaySunnyOvercast />,
    Mist: <WiFog />,
    'Patchy rain possible': <WiRaindrop />,
    'Patchy snow possible': <WiSnow />,
    'Patchy sleet possible': <WiSleet />,
    'Patchy freezing drizzle possible': <WiRaindrops />,
    'Thundery outbreaks possible': <WiThunderstorm />,
    'Blowing snow': <WiSnowWind />,
    Blizzard: <WiSnowflakeCold />,
    Fog: <WiDayFog />,
    'Freezing fog': <WiFog />,
    'Patchy light drizzle': <WiRaindrops />,
    'Light drizzle': <WiRaindrops />,
    'Freezing drizzle': <WiSnow />,
    'Heavy freezing drizzle': <WiSnow />,
    'Patchy light rain': <WiRaindrop />,
    'Light rain': <WiRain />,
    'Moderate rain at times': <WiRain />,
    'Moderate rain': <WiRain />,
    'Heavy rain at times': <WiRainWind />,
    'Heavy rain': <WiRainWind />,
    'Light freezing rain': <WiRain />,
    'Moderate or heavy freezing rain': <WiSnowWind />,
    'Light sleet': <WiSleet />,
    'Moderate or heavy sleet': <WiSleet />,
    'Patchy light snow': <WiSnow />,
    'Light snow': <WiSnow />,
    'Patchy moderate snow': <WiSnow />,
    'Moderate snow': <WiSnow />,
    'Patchy heavy snow': <WiSnow />,
    'Heavy snow': <WiSnow />,
    'Ice pellets': <WiHail />,
    'Light rain shower': <WiRain />,
    'Moderate or heavy rain shower': <WiRainWind />,
    'Torrential rain shower': <WiRainWind />,
    'Light sleet showers': <WiSleet />,
    'Moderate or heavy sleet showers': <WiSleet />,
    'Light snow showers': <WiSnow />,
    'Moderate or heavy snow showers': <WiSnow />,
    'Patchy light rain with thunder': <WiThunderstorm />,
    'Moderate or heavy rain with thunder': <WiThunderstorm />,
    'Patchy light snow with thunder': <WiDaySnowThunderstorm />,
    'Moderate or heavy snow with thunder': <WiDaySnowThunderstorm />,
};
