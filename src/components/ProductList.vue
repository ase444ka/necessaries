<template>
  <div class="products">
    <div v-for="p in products" class="product">
      <img :src="p.image" />
      {{ p.title }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductList',
  components: {},


  props: ['products'],

  computed: {},
  watch: {},
 
  
};
</script>
<style lang="scss" scoped>
.products {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
  .product {
    background-color: var(--primary);
    color: var(--white);
    padding: 5px;
  }
</style>
