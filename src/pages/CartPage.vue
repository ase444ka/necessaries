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
      <div class="row">
        <div>Доска с листьями</div>
        <div>1000</div>
        <div>1</div>
        <div>1000</div>
        <div><button class="remove"></button></div>
      </div>
      <div class="row">
        <div>Веселый куб</div>
        <div>5000</div>
        <div>1</div>
        <div>500</div>
        <div><button class="remove"></button></div>
      </div>
      <div class="row footer">
        <div>Итог</div>
        <div>5000</div>
        <div>2</div>
        <div>6000</div>
      </div>
    </section>
    <ProductModal />
  </main>
</template>
<script>
export default {
  name: 'CartPage',
  components: {},
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
<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-columns: minmax(max-content, 300px) 1fr 1fr 1fr 30px;
  border-bottom: 2px solid var(--primary);
  border-left: 2px solid var(--primary);
  border-right: 2px solid var(--primary);
  padding: 20px;
  font-weight: medium;
  font-size: 22px;
}
.header {
  border-top: 2px solid var(--primary);
  
}
.header, .footer {
  * {
    font-weight: bold;
  }
}

.remove {
  outline: none;
  border: none;
  background: url(@/assets/trash.svg);
  background-color: var(--white);
  width: 18px;
  height: 18px;

  background-size: contain;
  background-repeat: no-repeat;
}
</style>
