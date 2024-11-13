import axios from 'axios'
export const productsApi = {
  async getProducts() {
    console.log('getting products//')
    const { data } = await axios.get('https://fakestoreapi.com/products');
    return data
  }
}
