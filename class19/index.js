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
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'EarBuds',
    price: 150,
    image: 'https://via.placeholder.com/150',
  },
];
let cart = [];
function renderCart()
{
   const cartItemList = document.getElementById('cart-items');
   cartItemList.innerHTML = '';
   cart.forEach(function(product){
       //create cart-item-element
       const cartItemElement = document.createElement('li');
       cartItemElement.innerText = `${product.name} - $${product.price} x 1`;
       //append cart-item-element to cart-item-list
       cartItemList.appendChild(cartItemElement);
       
   });

}
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

function isProductExistInCart(productId)
{
   const productIndex = cart.findIndex(function(product){
     return product.id  === productId ? true : false;
   });
   return productIndex === -1 ? false : true;
  
}

  function getAddToCardButton(product)
  {
   const addToCartButton = document.createElement('button');
   addToCartButton.innerText='Add to card';
   addToCartButton.className = 'bg-blue-500 py-1 px-2 rounded-sm font-semibold text-white mt-2';
   addToCartButton.addEventListener('click',function(){
    //add the product to cart
    if(isProductExistInCart(product.id))
      {
        alert(`This product is already in the cart`);
        return;
      }
    cart.push(product);
    renderCart(); 
   })
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
 
  const addToCartButton = getAddToCardButton(product);
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