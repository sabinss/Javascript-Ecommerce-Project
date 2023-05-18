import { openCart } from '../../index.js';
import { fetchProductById } from '../fetchProducts.js';
import { getElement, getStorageItem, setStorageItem } from '../helper.js';
const cartItemElement = document.querySelector('.cart-items');

// console.log({ store });
// const store = getStorageItem('store');

let cart = getStorageItem('cart');

function calculateTotalCartAmount() {
  return cart.reduce((acc, value) => {
    return acc + value.price * value.count;
  }, 0);
}

function displayTotalCartAmount() {
  document.querySelector('.cart-total').innerHTML = calculateTotalCartAmount();
}

function addCartItemToDom(id) {
  let item = cart.find((x) => x.id === id);
  if (!item) {
    let selectedProduct = fetchProductById(id);
    selectedProduct = { ...selectedProduct, count: 1 };
    cart = [...cart, selectedProduct];
    console.log('111', cart);
  } else {
    cart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          ...cartItem,
          count: cartItem.count + 1,
        };
      } else return cartItem;
    });
    console.log('222', cart);
  }
  console.log('cart', cart);
  setStorageItem('cart', cart);
  displayCartItems();
  openCart();
  displayTotalCartAmount();
}

function displayCartItems() {
  const newCartItem = getStorageItem('cart');
  console.log('newCartItem', newCartItem);
  const cartItemElement = getElement('.cart-items');
  cartItemElement.innerHTML = newCartItem.map((cartItem) => {
    const { id, name, price, image, count } = cartItem;
    return `
<article class="cart-item">
            <img src="${image}" class="cart-item-img" alt="${name}" />
            <div>
              <h4 class="cart-item-name">${name}</h4>
              <p class="cart-item-price">${price}</p>
              <button class="cart-item-remove-btn" data-id="${id}">
                remove
              </button>
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
          </article>
`;
  });
}

export default addCartItemToDom;
