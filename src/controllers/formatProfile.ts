import { floor, round } from 'lodash-es';
import type { LocationProfile, FormattedProfile } from '../types'

const formatInfoString = (feelsLike: number, description: string, windSpeed: number):string => {

    return (`Feels like ${round(feelsLike)}°C.` + ` ` +
        `${description[0].toUpperCase()}${description.slice(1)}.` + ` ` +
        `${calculateWindClass(windSpeed)}.`
    );
}

const formatWindString = (speed: number, deg: number): string => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
    return (`${speed}m/s` + ` ` +
        directions[floor(deg/22.5)]
    );
}

const formatWindIconDirection = (windDeg: number):string => {
    // Assuming icon is pointing to 45deg by default and wind direction is given in meteorological.
    return `${(windDeg + 180 - 45) % 360}deg`
}

const calculateDewPoint = (temp: number, humidity: number): number => {
    // For Celsius
    return round((temp - ((100-humidity)/5)))
}

const calculateWindClass = (speed: number): string => {
    // Assuming m/s input, converting into miles per hour
    const classes = [
        {min: 0, desc: 'Calm'},
        {min: 1, desc: 'Light air'},
        {min: 3, desc: 'Light breeze'},
        {min: 8, desc: 'Gentle breeze'},
        {min: 13, desc: 'Moderate breeze'},
        {min: 18, desc: 'Fresh breeze'},
        {min: 25, desc: 'Strong breeze'},
        {min: 31, desc: 'High wind'},
        {min: 39, desc: 'Fresh gale'},
        {min: 47, desc: 'Strong gale'},
        {min: 55, desc: 'Storm'},
        {min: 64, desc: 'Violent storm'},
        {min: 73, desc: 'Hurricane'}
    ]
    const convertedSpeed = round(2.23694*speed);
    // go through wind classes and return the one that matches most
    return classes.reduce(
        (desc: string, current: {min: number, desc: string}) => {
            return (
                convertedSpeed >= current.min ?
                current.desc :
                desc
            );
        }, 'Calm');
}

const formatVisibility = (visibility: number): string => {
    return `${round((visibility / 1000), 1)}km`
}

export function formatProfile(profile: LocationProfile): FormattedProfile {
    const formattedProfile = 
    profile.weather ?
    {
        name: profile.name,
        weather: {
            iconSrc: `http://openweathermap.org/img/wn/${profile.weather.icon}@2x.png`,
            temp: `${round(profile.weather.temp)}°C`,
            info: formatInfoString(profile.weather.feelsLike, profile.weather.description, profile.weather.windSpeed),
            wind: formatWindString(profile.weather.windSpeed, profile.weather.windDeg),
            windDeg: round(profile.weather.windDeg - (profile.weather.windDeg % 45)),
            windIconDirection: formatWindIconDirection(round(profile.weather.windDeg - (profile.weather.windDeg % 45))),
            pressure: `${profile.weather.pressure}hPa`,
            humidity: `${profile.weather.humidity}%`,
            dewPoint: `${calculateDewPoint(profile.weather.temp, profile.weather.humidity)}°C`,
            visibility: formatVisibility(profile.weather.visibility)
        }
    } :
    {
        name: profile.name,
        error: `Could not find weather data for this location`
    }
    return formattedProfile
}