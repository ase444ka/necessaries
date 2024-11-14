<template>
  <div id="app">
    <HeaderBlock />

    <RouterView />
    <FooterBlock />
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import FooterBlock from './components/FooterBlock.vue';
import HeaderBlock from './components/HeaderBlock.vue';
import {productsApi} from '@/api';
import {useProductStore} from '@/store'


export default {
  components: {
    HeaderBlock,
    FooterBlock,
},
computed: {
  ...mapStores(useProductStore)
},
  mounted() {
    
    console.log('pr', useProductStore)
    this.getProducts();
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProducts() {
      try {
        await this.productStore.getProducts()
      } catch (e) {
        alert(`Возникла ошибка: ${e.message}. Попробуйте позже`);
      }
    },
  },
};
</script>


