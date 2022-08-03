import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'widget-store',
  state: () => ({
    cities: [],
    isSettingsOpen: false,
    addCityValue: ""
  }),
  getters: {
  },
  actions: {
  }
})
