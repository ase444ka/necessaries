<template>
  <div id="app">
    <HeaderBlock />

    <main>
      <AdsBlock />
      <section class="products">
        <h2>товары</h2>
        <ProductList :products="products" />
      </section>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import HeaderBlock from './components/HeaderBlock.vue';
import {productsApi} from '@/api';

import AdsBlock from './components/AdsBlock.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    ProductList,
    AdsBlock,
    HeaderBlock,
  },
  mounted() {
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
        this.products = await productsApi.getProducts();
      } catch (e) {
        alert(`Возникла ошибка: ${e.message}. Попробуйте позже`);
      }
    },
  },
};
</script>


