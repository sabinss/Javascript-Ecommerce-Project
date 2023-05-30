// specific imports
import fetchProducts from './src/fetchProducts.js';
import { store, setupStore } from './src/store.js';
import { products } from './product.js';
import { displayProducts } from './src/displayProducts.js';

// TodoList
// 1. fetch product from api
// 2. filter feature product
// 3. store in localstoreage
// 4. display in DOM
const init = async () => {
  // const products = await fetchProducts();
  setupStore(products);
  const featureProducts = store.filter((product) => product.featured);
  displayProducts(featureProducts, '.featured-center');
};

window.addEventListener('DOMContentLoaded', init);
