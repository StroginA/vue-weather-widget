import { formatProfile } from '@/controllers/formatProfile';
import { defineStore } from 'pinia';
import { getCurrentLocation, getWeatherByCoordinates, getMatchingLocations } from '../controllers/requests';
import type { WeatherReport, LocationCoordinates, LocationProfile, FormattedProfile } from '../types'



export const useStore = defineStore('store', {
  state: () => ({
    isSettingsOpen: false,
    locationInputValue: "",
    locationInputError: "",
    validLocations: [] as LocationCoordinates[], // Locations suggested when entering a new location's name
    locationsData: [] as LocationProfile[], // A list of locations currently watched
    formattedProfiles: [] as FormattedProfile[],
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
      if (this.locationsData.length === 0) {
        const currentLocation = await getCurrentLocation(this.weatherApiKey);
        const location = {
          name: currentLocation.state ?
          `${currentLocation.name}, ${currentLocation.country}, ${currentLocation.state}` :
          `${currentLocation.name}, ${currentLocation.country}`,
          lat: currentLocation.lat,
          lon: currentLocation.lon
        }
        this.locationsData.push(location);
      }
      this.fetchWeather();
    },
    parseWeatherToStore(location: LocationProfile, report: WeatherReport) {
      location.weather = {
        temp: report.main.temp,
        description: report.weather[0].description,
        icon: report.weather[0].icon,
        visibility: report.visibility,
        pressure: report.main.pressure,
        humidity: report.main.humidity,
        feelsLike: report.main.feels_like,
        windDeg: report.wind.deg,
        windSpeed: report.wind.speed
      }
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
            name: location.state ?
            `${location.name}, ${location.country}, ${location.state}` :
            `${location.name}, ${location.country}`,
            lat: location.lat,
            lon: location.lon
          })
        }
      }
    },
    addLocation() {
      /*
      Entered location name must match with one of valid locations queried earlier
      */
      const location = this.validLocations.find((current) => {
        return this.locationInputValue === current.name
      });
      if (location) {
        this.locationsData.push(location);
        this.fetchWeather();
        this.closeSettings();
        this.locationInputValue = "";
        this.locationInputError = "";
      } else {
        this.locationInputError = "No location with such name found."
      }
    },
    async fetchWeather() {
      /*
      Fetches weather for all watched locations. Mind your API call limits.
      */
      for (let location of this.locationsData) {
        const weatherInLocation = await getWeatherByCoordinates(location.lat, location.lon, this.weatherApiKey)
        this.parseWeatherToStore(location, weatherInLocation);
        this.formattedProfiles.push(formatProfile(location));
      }
    }
  }
})
