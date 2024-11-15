<template>
  <div class="modal">
    <div class="window">
      <div class="header">
        <h3 class="title title title_size_small">{{ product.title }}</h3>
        <RouterLink class="close" to="/"> </RouterLink>
      </div>

      <div class="content">
        <div class="image">
          <img :src="product.image" alt="сумка" />
        </div>

        <div class="text">
          <div class="description">
            <h6>Описание</h6>
            {{ product.description }}
          </div>
          <div class="category">
            <h6>Категория</h6>
            {{ product.category }}
          </div>
          <div class="rating">
            <h6>Рейтинг</h6>
            {{ product.rating.rate }}
          </div>
        </div>
        <div class="buy">
          <div class="price">{{ product.price }}</div>

          <button  @click="addToCart(product.id)">купить</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {useProductStore, useCartStore} from '@/store';
import {mapStores} from 'pinia';
export default {
  name: 'ProductModal',

  computed: {
    ...mapStores(useProductStore, useCartStore),
    product() {
      return this.productStore.getProductById(this.$route.params.id);
    },
  },

  methods: {
    addToCart(id) {
      this.cartStore.addProduct(id);
    },
  },
};
</script>
<style scoped lang="scss">
.modal {
  display: block;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  background: rgba(80%, 80%, 80%, 80%);
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  overflow-y: auto;
}
.window {
  margin: auto;
  background: var(--white);
  opacity: 1;
  border: 1px solid transparent;
  min-width: 60%;
  max-width: 90%;
}
.header {
  position: relative;
  background-color: var(--primary);
  color: var(--white);
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 2rem;
  }
}
.close {
  background: url(@/assets/x.svg);
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--white);
  background-color: var(--primary);
}

.title {
  margin: 0;
  padding: 0;
}

.content {
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-template-rows: repeat(2,max-content);
  gap: 40px;
  padding: 40px;

  .image {
    flex-basis: 600px;
    height: 600 px;
    flex-shrink: 0;
    flex-grow: 0;
    overflow: hidden;
    grid-row: span 2;

    img {
      object-fit: cover;
      width: 100%;
    }
  }
  .text {
    font-weight: medium;
    font-size: 1.5rem;
    /* display: grid;
    align-items: start;
    grid-template-rows: repeat(3, max-content); */
    h6 {
      color: #606462;
      font-size: 1.25rem;
    }
  }
  .buy {
    align-self: end;
    .price {
      font-size: 2.25rem;
      align-self: end;
    }

    button {
      border: 2px solid var(--primary);
      color: var(--white);
      font-size: 1.5rem;
      text-transform: capitalize;
      width: 100%;
      padding: 13px;
      background-color: var(--primary);
      &:hover {
      transform: translate3d(1px, 1px, -1px);
    }
    &:active {
      background-color: var(--white);
      color: var(--primary);
      border: 2px solid var(--primary);
    }
    }
  }
}
</style>
