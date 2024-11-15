import {defineStore} from 'pinia';
import {useProductStore} from './products';
export {useProductStore} from './products';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    order: {},
  }),
  getters: {
    sum: (state) =>
      Object.entries(state.order).reduce((p, c) => p + c.count * c.price, 0),
    orderedProducts: (state) =>
      Object.entries(state.order).map((e) => ({
        ...useProductStore().getProductById(e[0]),
        count: e[1],
      })),
  },
  actions: {
    addProduct(id) {  
      const count = (this.order[id] || 0) + 1;
      this.order = {...this.order, [id]: count};
    },
  },
});
