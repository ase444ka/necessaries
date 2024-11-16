<template>
  <main>
    <section class="cart">
      <h2>корзина</h2>
      <div class="row header">
        <div>Товар</div>
        <div>Цена, руб</div>
        <div>Кол-во</div>
        <div>Сумма, руб</div>
      </div>
      <div class="row" v-for="p in cartStore.orderedProducts">
        <div>{{ p.title }}</div>
        <div>{{p.price}}</div>
        <div>{{ p.count }}</div>
        <div>{{ p.price * p.count }}</div>
        <div><button class="remove" @click="remove(p.id)"></button></div>
      </div>
      
      <div class="row footer">
        <div>Итог</div>
        <div></div>
        <div>{{ cartStore.totalCount }}</div>
        <div>{{ cartStore.totalSum }}</div>
      </div>
    </section>
    <ProductModal />
  </main>
</template>
<script>
import {useCartStore} from '../store';
import {mapStores} from 'pinia';
export default {
  name: 'CartPage',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapStores(useCartStore),
  },
  watch: {},
  mounted() {},
  methods: {
    remove(id) {
      this.cartStore.removeProduct(id)
    }
  },
};
</script>
<style lang="scss" scoped>
.row {
  div:first-child {
    font-size: 16px;
  }
  display: grid;
  grid-template-columns: minmax(200px, 600px) 1fr 1fr 1fr 30px;
  border-bottom: 2px solid var(--primary);
  border-left: 2px solid var(--primary);
  border-right: 2px solid var(--primary);
  padding: 20px;
  font-weight: medium;
  font-size: 22px;
  @media screen and (max-width: 1005px) {
    grid-template-columns: 1fr;
  }
}
.header {
  border-top: 2px solid var(--primary);
  @media screen and (max-width: 1150px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1005px) {
    height: 0px;
    overflow: hidden;
    border-bottom: none;
    padding: 0;
  }
  
}
.header, .footer {
  * {
    font-weight: bold;
  }
}

.remove {
  outline: none;
  border: none;
  background: url(../assets/trash.svg);
  background-color: var(--white);
  width: 18px;
  height: 18px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
}
</style>
