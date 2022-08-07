import type { LocationCoordinates, LocationGeoloc, WeatherReport } from "@/types";

export async function getMatchingLocations(name: string, apiKey: string): Promise<LocationGeoloc[]> {
    /*
    Queries weather geolocation API for locations matching input
    */
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${apiKey}`);
    const responseJson = await response.json();
    return responseJson
}

export async function getLocationByCoordinates(lat: number, lon: number, apiKey: string): Promise<LocationGeoloc[]> {
    /*
    Queries weather geolocation API for a single location matching coordinates
    */
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`);
    const responseJson = await response.json();
    return responseJson
}


export async function getWeatherByCoordinates(lat: number, lon: number, apiKey: string): Promise<WeatherReport> {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const responseJson = await response.json()
    return responseJson
}


export async function getCurrentLocation(apiKey: string) {
    /*
    Attempts to get current coordinates, then fetch the location name from weather API
    */
    return new Promise<LocationGeoloc>((resolve, reject) => {
        const geo = window.navigator.geolocation;
        geo.getCurrentPosition(
            (position) => {
                getLocationByCoordinates(position.coords.latitude, position.coords.longitude, apiKey)
                .then(value=>resolve(value[0]))
                .catch(error=>reject(error))
            },
            (error) => {
                reject(error)
            }
        );
    })
}
