import { store, setupStore } from './src/store.js';
import { products } from './product.js';
import { displayProducts } from './src/displayProducts.js';

const searchInput = document.querySelector('.search-input');
const companyBtns = document.querySelectorAll('.company-btn');

// priceFilterEle.addEventListener('input', (e) => {
//   console.log('priceFilterEle', priceFilterEle.value);
//   priceValue.textContent = `Value:$${priceFilterEle.value}`;
//   let newStore = store.filter(
//     (product) => product.price <= priceFilterEle.value
//   );
//   displayProducts(newStore, '.products-container');
// });

companyBtns.forEach((companyBtn) => {
  companyBtn.addEventListener('click', () => {
    let finalProduct = [];
    console.log('companyBtn.textContent', companyBtn.textContent);
    if (companyBtn.textContent == 'all') {
      // store product display
      finalProduct = store;
    } else {
      finalProduct = store.filter((product) => {
        if (product.company == companyBtn.textContent) {
          return product;
        }
      });
    }
    displayProducts(finalProduct, '.products-container');
    console.log({ finalProduct });
  });
});

function searchProduct(searchValue) {
  const filterProduct = store.filter((x) => x.name.includes(searchValue));

  if (filterProduct.length < 1) {
    const products = document.querySelector('.products-container');
    products.innerHTML = `<h3 class="filter-error">
       sorry, no products matched your search
       </h3>`;
  } else {
    displayProducts(filterProduct, '.products-container');
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
