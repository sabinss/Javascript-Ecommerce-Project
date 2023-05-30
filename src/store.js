import { getStorageItem, setLocalStorageItem } from './utils.js';

let store = getStorageItem('store');
function setupStore(products) {
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return {
      id,
      featured,
      name,
      price,
      company,
      colors,
      image,
    };
  });
  setLocalStorageItem('store', store);
}
export { store, setupStore };
