import {defineStore} from 'pinia';
import {productsApi} from '../api'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [],
  }),

  getters: {
    getProductById: (state) => {
      return (id) => state.products.find((p) => p.id == id)
    },
  },

  actions: {
    async getProducts() {
      this.products = await productsApi.getProducts()
    },
  },
});
