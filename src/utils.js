//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = 'https://course-api.com/javascript-store-products';
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product';

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);

  if (storageItem) {
    return JSON.parse(localStorage.getItem(item));
  } else {
    return [];
  }
};

const setLocalStorageItem = (key, value) => {
  localStorage.setItem(name, JSON.stringify(key));
};

export {
  allProductsUrl,
  singleProductUrl,
  getStorageItem,
  setLocalStorageItem,
};
