import { getStorageItem } from './helper.js';
import { allProductsUrl } from './utils.js';

const store = getStorageItem('store');

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => console.log(err));
  if (response) {
    return response.json();
  }
  return response;
};

const fetchProductById = (id) => {
  const product = store.find((x) => x.id === id);
  return product;
};

export { fetchProducts, fetchProductById };
