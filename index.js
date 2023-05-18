// specific imports
import addCartItemToDom from './src/cart/addCartToDom.js';
import { fetchProducts } from './src/fetchProducts.js';
import { setStorageItem, getElement } from './src/helper.js';

const cartOverlay = getElement('.cart-overlay');
const toggleCartBtn = getElement('.toggle-cart');
const cloaseCartBtn = getElement('.cart-close');

cloaseCartBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('show');
});
toggleCartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('show');
});

export const openCart = () => {
  cartOverlay.classList.add('show');
};

function displayProduct(products) {
  const element = document.querySelector('.featured-center');
  element.innerHTML = products
    .map((product) => {
      const { id, name, price, image } = product;
      return `
    <article class="product">
    <div class="product-container">
      <img src="${image}" class="product-img img" alt="" />

      <div class="product-icons">
        <a href="product.html?id=${id}" class="product-icon">
          <i class="fas fa-search"></i>
        </a>
        <button class="product-cart-btn product-icon" data-id="${id}">
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
    <footer>
      <p class="product-name">${name}</p>
      <h4 class="product-price">${price}</h4>
    </footer>
  </article>
    `;
    })
    .join('');

  element.addEventListener('click', function (e) {
    const parentElement = e.target.parentElement;
    console.log(parentElement);

    if (parentElement.classList.contains('product-cart-btn')) {
      console.log('clicked', parentElement.dataset);
      addCartItemToDom(parentElement.dataset.id);
    }
  });
}

const init = async () => {
  const products = await fetchProducts();
  console.log('products', products);
  if (products) {
    const store = products.map((product) => {
      const {
        id,
        fields: { featured, name, price, company, colors, image: img },
      } = product;
      const image = img[0].thumbnails.large.url;
      return { id, featured, name, price, company, colors, image };
    });
    setStorageItem('store', store);
    displayProduct(store);
  }
};

window.addEventListener('DOMContentLoaded', init);
