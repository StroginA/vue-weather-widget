import { setActivePinia, createPinia } from 'pinia'
import { describe, beforeEach, it, expect, vi } from 'vitest'
import { useStore } from '../stores/store'
import {getMatchingLocations} from '../controllers/requests'

describe('store', () => {
  vi.mock('../controllers/requests', () => {
    return {
      getMatchingLocations: vi.fn().mockImplementation((name: string, _: string) => {
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
    }
  })

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
    store.locationInputValue = ""
    store.validLocations = []
    await store.fetchLocationNames()
    expect(store.validLocations, 'locations list still empty').toEqual([])
    expect(getMatchingLocations, 'API was not queried with empty input').not.toHaveBeenCalled()
    store.locationInputValue = "London"
    await store.fetchLocationNames()
    expect(getMatchingLocations, 'mock API was queried').toHaveBeenCalled()
    expect(store.validLocations, 'fetched and parsed name/country').toEqual([
      {name: 'London, GB', lat: 0, lon: 1},
      {name: 'London, CA', lat: 2, lon: 3}
    ])
  })
})