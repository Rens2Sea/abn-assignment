import { defineStore } from 'pinia'

export const useMealStore = defineStore({
  id: 'mealStore',
  state: () => ({
    searchKeyword: ''
  }),
  actions: {
    setSearchKeyword (keyword: string) {
      this.searchKeyword = keyword
    }
  }
})
