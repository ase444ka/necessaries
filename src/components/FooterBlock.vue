<template>
  <footer>
    <h1>Штуки</h1>
    <nav>
      <ul>
        <li><RouterLink to="/">главная</RouterLink></li>
        <li><RouterLink to="/cart">корзина</RouterLink></li>
      </ul>
    </nav>
    <button>
      Напиши нам
    </button>
  </footer>
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
footer {
  color: var(--white);
  background-color: var(--primary);
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 70px;
  h1 {
    font-weight: bold;
    font-size: 2rem;
    margin: 0; 
    cursor: default;
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
  button {
    border: 2px solid var(--white);
    color: var(--white);
    background-color: var(--primary);
    font-size: 1.25rem;
    padding: 10px;
  }
}
</style>
