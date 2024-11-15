<template>
  <div class="products">
    <RouterLink v-for="p in productStore.products" :key="p.id" class="product" :to="`/product/${p.id}`">
      <img :src="p.image" />
      <div class="title">
        {{ p.title }}
      </div>
      <button class="buy" @click.prevent="addToCart(p.id)">купить</button>
    </RouterLink>
  </div>
</template>
<script>
import {useProductStore, useCartStore} from '@/store'
import { mapStores } from 'pinia'


export default {
  name: 'ProductList',

  computed: {
  ...mapStores(useProductStore, useCartStore)
},
  watch: {},
  methods: {
    addToCart(id) {
      this.cartStore.addProduct(id)
    }
  }
};
</script>
<style lang="scss" scoped>
.products {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  @media screen and (max-width: 870px) {
    justify-content: center;
  }
}
.product {
  cursor: default;
  color: var(--primary);
  width: 380px;
  font-size: 1.2rem;
  @media screen and (min-width: 870px) {
    height: 600px;
  }
  img {
    object-fit: cover;
    height: 400px;
    width: 100%;
  }
  .title {
    @media screen and (min-width: 870px) {
      min-height: 140px;
    }
  }
  .buy {
    border: 2px solid var(--primary);
    color: var(--primary);
    text-transform: capitalize;
    width: 100%;
    padding: 13px;
    background-color: var(--white);
    cursor: pointer;
    &:hover {
      transform: translate3d(1px, 1px, -1px);
    }
    &:active {
      background-color: var(--primary);
      color: var(--white)
    }
  }
}
</style>
