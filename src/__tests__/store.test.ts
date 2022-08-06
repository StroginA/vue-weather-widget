import { setActivePinia, createPinia } from 'pinia'
import { describe, beforeEach, it, expect, vi } from 'vitest'
import { useStore } from '../stores/store'


describe('store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('opens and closes settings', () => {
    const store = useStore()
    expect(store.isSettingsOpen).toBe(false)
    store.openSettings()
    expect(store.isSettingsOpen).toBe(true)
    store.closeSettings()
    expect(store.isSettingsOpen).toBe(false)
  })

  it('parses suggested locations', async () => {
    const store = useStore()
    const getMatchingLocations = vi.fn().mockImplementation((name, _) => {
      const responseJson = [
        {
            name: name,
            country: "GB",
            lat: 0,
            lon: 1
        },
        {
            name: name,
            country: "CA",
            lat: 2,
            lon: 3
        }
      ]
      return responseJson
    })
    const fetchLocationNames = vi.fn().mockImplementation(async () => {
      if (store.locationInputValue) {
        const data = await getMatchingLocations(store.locationInputValue, store.weatherApiKey);
        for (let location of data) {
          store.validLocations.push({
            name: `${location.name}, ${location.country}`,
            lat: location.lat,
            lon: location.lon
          })
        }
      }
    })
    store.locationInputValue = ""
    store.validLocations = []
    await fetchLocationNames()
    expect(store.validLocations, 'locations list still empty').toEqual([])
    expect(getMatchingLocations, 'API was not queried with empty input').not.toHaveBeenCalled()
    store.locationInputValue = "London"
    await fetchLocationNames()
    expect(getMatchingLocations, 'mock API was queried').toHaveBeenCalled()
    expect(store.validLocations, 'fetched and parsed name/country').toEqual([
      {name: 'London, GB', lat: 0, lon: 1},
      {name: 'London, CA', lat: 2, lon: 3}
    ])
  })



})