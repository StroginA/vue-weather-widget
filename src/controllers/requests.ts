export interface LocationByName {
    name: string
    country: string
    lat: number
    lon: number
    additionalProperties?: { [prop: string]: string};
}

export interface WeatherReport {
    coord: {
        lat: number,
        lon: number
    }
    weather: [
        {
          description: string
          icon: string
        }
    ]
    main: {
        temp: number
        feels_like: number
        pressure: number
        humidity: number
    },
    visibility: number
    wind: {
        speed: number
        deg: number
    }
    sys: {
        country: string
    }
    name: string
}

export async function getMatchingLocations(name: string, apiKey: string): Promise<LocationByName[]> {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${apiKey}`);
    const responseJson = await response.json();
    return responseJson
}


async function getLocationByCoordinates(lat: number, lon: number, apiKey: string): Promise<WeatherReport> {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const responseJson = await response.json()
    return responseJson
}

export async function getLocalWeather(apiKey: string) {
    return new Promise<WeatherReport>((resolve, reject) => {
        const geo = window.navigator.geolocation;
        geo.getCurrentPosition(
            (position) => {
                getLocationByCoordinates(position.coords.latitude, position.coords.longitude, apiKey)
                .then(value=>resolve(value))
                .catch(error=>reject(error))
            },
            (error) => {
                reject(error)
            }
        );
    })
}
