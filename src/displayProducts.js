import { addToCart } from './addToCart.js';

function test() {
  console.log('test clicked');
}
function displayProducts(products, element) {
  const featureElement = document.querySelector(element);
  featureElement.innerHTML = products
    .map((product) => {
      return `
    <article class="product">
    <div class="product-container">
      <img src="${product.image}" class="product-img img" alt="" />

      <div class="product-icons">
        <a href="product.html?id=1" class="product-icon">
          <i class="fas fa-search"></i>
        </a>
        <button class="product-cart-btn product-icon" data-id="${product.id}">
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
    <footer>
      <p class="product-name">${product.name}</p>
      <h4 class="product-price">$${product.price}</h4>
    </footer>
  </article>
    `;
    })
    .join('');

  featureElement.addEventListener('click', function (e) {
    if (e.target.parentElement.classList.contains('product-cart-btn')) {
      addToCart(e.target.parentElement.dataset.id);
    }
    // addToCar()
  });
}

export { displayProducts };
