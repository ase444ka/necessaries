<template>
  <main>
    <AdsBlock />
    <section class="products">
      <h2>товары</h2>
      <ProductList />
    </section>
    <ProductModal />
  </main>
</template>
<script>
import ProductList from '../components/ProductList.vue';
import ProductModal from '../components/ProductModal.vue';
import AdsBlock from '../components/AdsBlock.vue';
export default {
  name: 'ProductPage',
  components: {AdsBlock, ProductModal, ProductList},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="" scoped></style>
