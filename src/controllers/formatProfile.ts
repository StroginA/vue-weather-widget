import { floor, round } from 'lodash';
import type { LocationProfile, FormattedProfile } from '../types'

const formatInfoString = (feelsLike: number, description: string):string => {
    return (`Feels like ${round(feelsLike)}°C.` +
        `${description[0].toUpperCase()}${description.slice(1)}.`
    );
}

const formatWindString = (speed: number, deg: number): string => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
    return (`${speed}m/s` + ` ` +
        directions[floor(deg/22.5)]
    );
}

const calculateDewPoint = (temp: number, humidity: number): number => {
    // For Celsius
    return round((temp - ((100-humidity)/5)))
}

const formatVisibility = (visibility: number): string => {
    return `${round((visibility / 1000), 1)}km`
}

export function formatProfile(profile: LocationProfile): FormattedProfile {
    const formattedProfile = {
        name: profile.name,
        iconSrc: `http://openweathermap.org/img/wn/${profile.icon}@2x.png`,
        temp: `${round(profile.temp)}°C`,
        info: formatInfoString(profile.feelsLike, profile.description),
        wind: formatWindString(profile.windSpeed, profile.windDeg),
        windDeg: round(profile.windDeg - (profile.windDeg % 45)),
        pressure: `${profile.pressure}hPa`,
        humidity: `${profile.humidity}%`,
        dewPoint: `${calculateDewPoint(profile.temp, profile.humidity)}°C`,
        visibility: formatVisibility(profile.visibility)
    }
    return formattedProfile
}