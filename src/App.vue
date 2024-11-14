<template>
  <div id="app">
    <HeaderBlock />

    <main>
      <AdsBlock />
      <section class="products">
        <h2>товары</h2>
        <ProductList :products="products" />
      </section>
      <ProductModal />
    </main>

    <FooterBlock />
  </div>
</template>

<script>
import FooterBlock from './components/FooterBlock.vue';
import HeaderBlock from './components/HeaderBlock.vue';
import {productsApi} from '@/api';

import AdsBlock from './components/AdsBlock.vue';
import ProductList from '@/components/ProductList.vue';
import ProductModal from './components/ProductModal.vue';

export default {
  components: {
    ProductList,
    AdsBlock,
    HeaderBlock,
    FooterBlock,
    ProductModal
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


