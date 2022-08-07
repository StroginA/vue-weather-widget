export interface LocationGeoloc {
    // To be received from geolocation API
    name: string
    country: string
    lat: number
    lon: number
    state?: string
    additionalProperties?: { [prop: string]: string};
}

export interface WeatherReport {
    // To be received from current weather API
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

export interface LocationCoordinates {
    // Representation of watched/suggested locations
    name: string // "London, GB"
    lat: number
    lon: number
}
  
export interface LocationProfile {
    // Representation of weather in a location, as written into store
    name: string // "London, GB"
    lat: number
    lon: number
    weather?: {
        temp: number
        description: string // "clear sky"
        icon: string // 01d
        visibility: number // meters
        pressure: number // hPa
        humidity: number // percent
        windSpeed: number // meter/sec
        windDeg: number // degrees
        feelsLike: number
    }
    isLoading?: boolean
    formatted?: FormattedProfile
}

export interface FormattedProfile {
    // intended for direct consumption by UI
    name: string
    weather?: {
        iconSrc: string
        temp: string
        info: string
        wind: string
        windDeg: number // clamped to 45deg intervals
        pressure: string
        humidity: string
        dewPoint: string
        visibility: string
    }
    error?: string
}