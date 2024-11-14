<template>
  <header>
    <h1>Штуки</h1>
    <nav>
      <ul>
        <li><a href="#">главная</a></li>
        <li><a href="#">магазин</a></li>
      </ul>
    </nav>
    <a href="#" class="cart-link">
      <svg>
        <use href="@/assets/sprites.svg#check"></use>
      </svg>
      <div class="baidge">1</div>
    </a>
  </header>
</template>
<script>
export default {
  name: 'HeaderBlock',
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
header {
  border: 2px solid var(--primary);
  min-height: 60px;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 12px;
  h1 {
    font-weight: bold;
    font-size: 2rem;
    margin: 0; 
  }
  ul {
    display: flex;
    gap: 34px;
    font-size: 1.25rem;
    text-transform: capitalize;
    font-weight: medium;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }
}
.cart-link {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  svg {
    width: 22px;
    height: 22px;
  }
  .baidge {
    position: absolute;
    top: 2px;
    right: 2px;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c95103;
    color: var(--white);
  }
}
</style>
