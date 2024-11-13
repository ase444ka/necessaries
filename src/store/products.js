import {defineStore} from 'pinia';
import {productsApi} from '@/api'

export const useProductStore = defineStore({
  id: 'products',
  state: () => ({
    products: [],
  }),

  actions: {
    getProducts: async () => {
      this.products = await productsApi.getProducts()
    },
  },
});
