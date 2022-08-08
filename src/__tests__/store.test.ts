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
})