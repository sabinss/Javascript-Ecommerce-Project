// specific imports
import fetchProducts from './src/fetchProducts.js';

const init = async () => {
  const products = await fetchProducts();
  console.log('products', products);
};

window.addEventListener('DOMContentLoaded', init);
