import MainPage from '@/pages/MainPage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import CartPage from '@/pages/CartPage.vue'

export const routes = [
  { path: '/', component: MainPage },
  { path: '/product', component: ProductPage },
  { path: '/cart', component: CartPage }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

