'use strict';
 
const products = [
  {
    id: 1,
    name: 'Gaming Laptop',
    price: 1500,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 50,
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: 3,
    name: 'EarBuds',
    price: 150,
    image: 'https://via.placeholder.com/150',
  },
];
 
function getProductImageElement(product) {
  const productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.alt = product.name;
  productImage.classList.add('w-full', 'mb-4');
  return productImage;
}
 
function getProductNameElement(productName) {
  const productNameElement = document.createElement('h3');
  productNameElement.innerText = productName;
  productNameElement.classList.add('text-lg', 'font-semibold');
  return productNameElement;
}
function getProductPriceElement(productPrice) {
    const productPriceElement = document.createElement('p'); 
    productPriceElement.innerText = `$${productPrice}`; 
    productPriceElement.classList.add('text-lg', 'font-semibold');
    return productPriceElement;
  }

  function getAddToCardButton()
  {
   const addToCartButton = document.createElement('button');
   addToCartButton.innerText='Add to card';
   addToCartButton.className = 'bg-blue-500 py-1 px-2 rounded-sm font-semibold text-white mt-2';
   return addToCartButton;
  }
 
function getProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('bg-white', 'p-4', 'rounded', 'shadow');
 
  const productImage = getProductImageElement(product);
  card.appendChild(productImage);
 
  const productName = getProductNameElement(product.name);
  card.appendChild(productName);

  const productPrice  = getProductPriceElement(product.price);
  card.appendChild(productPrice);
 
  const addToCartButton = getAddToCardButton();
  card.appendChild(addToCartButton);
  return card;
}
 
function renderProducts() {
  const productListContainer = document.getElementById('product-list');
  productListContainer.innerHTML = '';
  products.forEach(function (product) {
    const productCard = getProductCard(product);
    productListContainer.appendChild(productCard);
  });
}
 
renderProducts(); 