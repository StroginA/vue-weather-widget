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
      // load data from storage
      const storedData = localStorage.getItem('weather-widget');
      storedData ? this.locationsData = JSON.parse(storedData) : this.locationsData = []
      // If launched without any locations stored, display weather for current location
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
    saveToStorage() {
      localStorage.setItem('weather-widget', JSON.stringify(this.locationsData));
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
          const toPush = {
            name: location.state ?
            `${location.name}, ${location.country}, ${location.state}` :
            `${location.name}, ${location.country}`,
            lat: location.lat,
            lon: location.lon
          }
          // only add to the list if not there
          if (!this.validLocations.find((current)=>{
            return current.name === toPush.name
          })) {
            this.validLocations.push(toPush)
          }
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
        if (this.locationsData.find((current) => {
          return location.name === current.name
        })) {
          // Don't add if it's already in the list
          this.locationInputError = "This location is already being watched."
        } else {
          this.locationsData.push(location);
          this.fetchWeather();
          this.locationInputValue = "";
          this.locationInputError = "";
          this.validLocations = [];
          this.saveToStorage();
        }
      } else {
        this.locationInputError = "No location with such name found."
      }
    },
    deleteLocation(name: string) {
      this.locationsData = this.locationsData.filter((current)=>!(name===current.name));
      this.saveToStorage();
    },
    async fetchWeather() {
      /*
      Fetches weather for all watched locations. Mind your API call limits.
      */
      for (let location of this.locationsData) {
        location.isLoading = true;
        const weatherInLocation = await getWeatherByCoordinates(location.lat, location.lon, this.weatherApiKey)
        this.parseWeatherToStore(location, weatherInLocation);
        location.formatted = formatProfile(location);
        location.isLoading = false;
      }
    }
  }
})
