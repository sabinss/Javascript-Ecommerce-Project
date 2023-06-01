import { getStorageItem, setLocalStorageItem } from './utils.js';
import { store } from './store.js';
let cart = getStorageItem('cart');

const cartOverlay = document.querySelector('.cart-overlay');
const cartClose = document.querySelector('.cart-close');
const cartItemsElement = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartItemCount = document.querySelector('.cart-item-count');
function findProductById(id) {
  return store.find((product) => product.id === id);
}

cartClose.addEventListener('click', function () {
  cartOverlay.classList.remove('show');
});

// function openCart() {
//   cartOverlay.classList.add('show');
// }

function displayCartItemCount() {
  const count = cart.reduce((acc, value) => {
    return acc + value.count;
  }, 0);
  cartItemCount.textContent = count;
}

function addCartItemToDom({ id, name, price, image, count }) {
  const article = document.createElement('article');
  article.classList.add('cart-item');
  article.innerHTML = `
      <img src="${image}"
                class="cart-item-img"
                alt="${name}"
              />
              <div>
                <h4 class="cart-item-name">${name}</h4>
                <p class="cart-item-price">${price}</p>
                <button class="cart-item-remove-btn" data-id="${id}">remove</button>
              </div>

              <div>
                <button class="cart-item-increase-btn" data-id="${id}">
                  <i class="fas fa-chevron-up"></i>
                </button>
                <p class="cart-item-amount" data-id="${id}">${count}</p>
                <button class="cart-item-decrease-btn" data-id="${id}">
                  <i class="fas fa-chevron-down"></i>
                </button>
              </div>
      `;
  cartItemsElement.appendChild(article);
}

function updateTotalAmount() {
  const totalAmount = cart.reduce((acc, val) => {
    return acc + val.count * val.price;
  }, 0);
  cartTotal.innerHTML = `$${totalAmount}`;
}

function countCartItem() {}

function addToCart(productId) {
  let product;
  let cartItem = cart.find((x) => x.id === productId);
  product = findProductById(productId);
  if (!cartItem) {
    product.count = 1;
    cart = [product, ...cart];
    addCartItemToDom(product);
  } else {
    cart = cart.map((cartItem) => {
      if (cartItem.id === productId) {
        return {
          ...cartItem,
          count: cartItem.count + 1,
        };
      }
      return cartItem;
    });
    console.log('222', cart);
  }
  setLocalStorageItem('cart', cart);
  updateTotalAmount();
  displayCartItemCount();
  openCart();
}

function openCart() {
  const cartOverlay = document.querySelector('.cart-overlay');
  cartOverlay.classList.add('show');
}

export { addToCart };
