import {defineStore} from 'pinia';
import {productsApi} from '@/api'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [],
  }),

  actions: {
    async getProducts() {
      this.products = await productsApi.getProducts()
    },
  },
});
