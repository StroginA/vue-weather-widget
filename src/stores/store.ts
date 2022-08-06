import { defineStore } from 'pinia';
import { getLocalWeather, getMatchingLocations } from '../controllers/requests';
import type { WeatherReport } from '../controllers/requests'

interface LocationCoordinates {
  name: string // "London, US"
  lat: number
  lon: number
}

interface LocationProfile {
  name: string // "London, US"
  lat: number
  lon: number
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

export const useStore = defineStore('store', {
  state: () => ({
    isSettingsOpen: false,
    locationInputValue: "",
    locationInputError: "",
    validLocations: [] as LocationCoordinates[],
    locationsWatched: [] as LocationCoordinates[],
    locationsData: [] as LocationProfile[],
    widgetBodyError: "",
    weatherApiKey: ""
  }),
  getters: {
  },
  actions: {
    async initialize() {
      /*
      If no local storage found or cities are empty, requests current coordinates from geolocation 
      and adds current location into the list on success.
      */
      this.weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const localWeather = await getLocalWeather(this.weatherApiKey);
      this.parseWeatherToStore(localWeather);
      console.log(this.locationsData)
    },
    parseWeatherToStore(report: WeatherReport) {
      this.locationsData.push({
        name: `${report.name}, ${report.sys.country}`,
        lat: report.coord.lat,
        lon: report.coord.lon,
        temp: report.main.temp,
        description: report.weather[0].description,
        icon: report.weather[0].icon,
        visibility: report.visibility,
        pressure: report.main.pressure,
        humidity: report.main.humidity,
        feelsLike: report.main.feels_like,
        windDeg: report.wind.deg,
        windSpeed: report.wind.speed
      })
    },
    openSettings() {
      this.isSettingsOpen = true;
    },
    closeSettings() {
      this.isSettingsOpen = false;
    },
    async fetchLocationNames() {
      /*
      Request location by name from geocoding API and fetch a list of locations that match.
      Pick from list to fetch coordinate weather data.
      */
      if (this.locationInputValue) {
        const data = await getMatchingLocations(this.locationInputValue, this.weatherApiKey);
        for (let location of data) {
          this.validLocations.push({
            name: `${location.name}, ${location.country}`,
            lat: location.lat,
            lon: location.lon
          })
        }
      }
    },
    addLocation() {
      /*
      Entered location name must match with a coordinate pair
      */
      const validLocations = this.validLocations.filter((location) => {
        return location.name === this.locationInputValue
      });
      if (validLocations[0]) {
        this.locationsWatched.push(validLocations[0]);
        this.fetchWeather();
        this.closeSettings();
        this.locationInputValue = "";
        this.locationInputError = "";
      } else {
        this.locationInputError = "No location with such name found."
      }
    },
    fetchWeather() {
      /*
      Fetches weather for all watched locations. Mind your API call limits.
      */
    }
  }
})
