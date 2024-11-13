import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    products: {},
  }),
  getters: {
    sum: (state) => Object.entries(state.products).reduce((p,c) => p + c.count * c.price, 0)
  },
  actions: {
    // increment() {
    //   this.counter++
    // }
  }
})
