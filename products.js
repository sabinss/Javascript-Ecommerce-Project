import { store, setupStore } from './src/store.js';
import { products } from './product.js';
import { displayProducts } from './src/displayProducts.js';

const searchInput = document.querySelector('.search-input');

function searchProduct(searchValue) {
  const filterPRoduct = store.filter((x) => x.name.includes(searchValue));
  console.log('filterPRoduct', filterPRoduct);
  if (filterPRoduct.length < 1) {
    const products = document.querySelector('.products-container');
    products.innerHTML = `<h3 class="filter-error">
       sorry, no products matched your search
       </h3>`;
  } else {
    displayProducts(filterPRoduct, '.products-container');
  }
}

searchInput.addEventListener('input', function (e) {
  console.log(e.target.value);
  searchProduct(e.target.value);
});

const loadProudcts = () => {
  setupStore(products);
  console.log('store prouect', store);
  displayProducts(store, '.products-container');
};

loadProudcts();
