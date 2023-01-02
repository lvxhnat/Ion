import * as React from 'react';
import * as S from './style';

import Typography from '@mui/material/Typography';
import { WiStrongWind, WiRaindrop, WiThermometer } from 'react-icons/wi';
import { MdWavingHand } from 'react-icons/md';

import { ColorsEnum } from 'common/theme';
import { geoMapping } from './mappings';

import TimePiece from './timepiece';
import { getCurrentWeather } from 'data/ingestion/weather';
import { CurrentWeatherSchema } from 'data/schema/weather';
import { capitalizeString } from 'common/helper/general';

// https://colordesigner.io/gradient-generator
// https://momentjs.com/timezone/
export default function InternationalClock(props: { timeZoneName: string }) {
    const [weatherData, setWeatherData] = React.useState<CurrentWeatherSchema>();
    const [weatherLoading, setWeatherLoading] = React.useState<boolean>(false);

    const updateWeatherData = () => {
        getCurrentWeather(props.timeZoneName, geoMapping[props.timeZoneName].country_code).then(
            data => {
                if (Object.keys(data.data).length !== 0) setWeatherData(data.data);
                setWeatherLoading(false);
            }
        );
    };

    React.useEffect(() => {
        setWeatherLoading(true);
        updateWeatherData();
        const interval = setInterval(() => {
            updateWeatherData();
        }, 1000 * 60 * 60);
        return () => clearInterval(interval);
    }, []);

    return (
        <S.ClockWrapper>
            <TimePiece
                timeZoneName={weatherData ? weatherData.city : props.timeZoneName}
                timeZone={geoMapping[props.timeZoneName].timeZone}
            />
            <S.WeatherTextWrapper>
                <Typography
                    noWrap
                    variant="h4"
                    align="left"
                    sx={{ color: ColorsEnum.coolgray4, padding: 1 }}
                >
                    {weatherData ? capitalizeString(weatherData.weather_condition) : null}
                </Typography>
            </S.WeatherTextWrapper>
            <S.WeatherWrapper>
                {weatherData && !weatherLoading ? (
                    <>
                        <S.LeftWeatherWrapper>
                            <Typography variant="h3" align="center">
                                {`${Math.round(weatherData.temp)}°C`}
                            </Typography>
                        </S.LeftWeatherWrapper>
                        <S.RightWeatherWrapper>
                            <img
                                style={{ width: 40, height: 40 }}
                                src={weatherData.weather_icon_url}
                                alt=""
                            />
                        </S.RightWeatherWrapper>
                        <S.IconObjectTextWrapper>
                            <S.IconWaveObjectWrapper>
                                <MdWavingHand />
                            </S.IconWaveObjectWrapper>
                            <Typography
                                variant="body2"
                                align="center"
                                component="p"
                                sx={{
                                    fontSize: 10,
                                }}
                            >
                                {`${Math.round(weatherData.feels_like)}°C`}
                            </Typography>
                        </S.IconObjectTextWrapper>
                    </>
                ) : null}
            </S.WeatherWrapper>
            <S.WeatherTextWrapper>
                <S.IconObjectWrapper>
                    <S.IconWrapper>
                        {' '}
                        <WiStrongWind />{' '}
                    </S.IconWrapper>
                    <Typography variant="overline" align="center" component="p">
                        {weatherData ? Math.round(weatherData.wind_speed) : null} KMPH
                    </Typography>
                </S.IconObjectWrapper>
                <S.IconObjectWrapper>
                    <S.IconWrapper>
                        {' '}
                        <WiRaindrop />{' '}
                    </S.IconWrapper>
                    <Typography variant="overline" align="center" component="p">
                        {weatherData ? weatherData.humidity : null} %
                    </Typography>
                </S.IconObjectWrapper>
                <S.IconObjectWrapper>
                    <Typography
                        variant="overline"
                        align="center"
                        component="p"
                        sx={{ marginTop: -2, marginLeft: 2, position: 'absolute' }}
                    >
                        {weatherData ? Math.round(weatherData.temp_max) : null} °C
                    </Typography>
                    <S.IconWrapper style={{ marginBottom: 2 }}>
                        {' '}
                        <WiThermometer />{' '}
                    </S.IconWrapper>
                    <Typography
                        variant="overline"
                        align="center"
                        component="p"
                        sx={{ marginTop: -1, marginLeft: 2, position: 'absolute' }}
                    >
                        {weatherData ? Math.round(weatherData.temp_min) : null} °C
                    </Typography>
                </S.IconObjectWrapper>
            </S.WeatherTextWrapper>
        </S.ClockWrapper>
    );
}
