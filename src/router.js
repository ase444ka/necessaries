import MainPage from './pages/MainPage.vue'
import ProductPage from './pages/ProductPage.vue'
import CartPage from './pages/CartPage.vue'

export const routes = [
  { path: '/', name: 'main', component: MainPage },
  { path: '/product/:id', name: 'product', component: ProductPage },
  { path: '/cart', name: 'cart', component: CartPage },
  {
    path: '*',
    component: MainPage,
},

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

