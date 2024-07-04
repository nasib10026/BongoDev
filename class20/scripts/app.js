'use strict';

const products = [{
    id: 1,
    name: 'Gaming Laptop',
    price: 1500,
    image: 'https://via.placeholder.com/150',
    categories: ['Laptops', 'Gaming'],
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 50,
    image: 'https://via.placeholder.com/150',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 100,
    image: 'https://via.placeholder.com/150',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 4,
    name: 'External Hard Drive',
    price: 120,
    image: 'https://via.placeholder.com/150',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 5,
    name: 'Graphics Card',
    price: 500,
    image: 'https://via.placeholder.com/150',
    categories: ['Components', 'Gaming'],
  },
  {
    id: 6,
    name: 'Portable SSD',
    price: 200,
    image: 'https://via.placeholder.com/150',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 7,
    name: 'Gaming Monitor',
    price: 300,
    image: 'https://via.placeholder.com/150',
    categories: ['Monitors', 'Gaming'],
  },
  {
    id: 8,
    name: 'All-in-One Printer',
    price: 150,
    image: 'https://via.placeholder.com/150',
    categories: ['Peripherals', 'Printers'],
  },
];

let cart = [];
let selectedCategory = null;

function isProductExistInCart(productId) {
  const productIndex = cart.findIndex(function (product) {
    return product.id === productId;
  });
  return productIndex !== -1;
}

function removeProductFromCart(productId) {
  const productIndex = cart.findIndex(function (product) {
    return product.id === productId;
  });

  if (productIndex === -1) {
    alert('Product is not in the cart!!!');
    return;
  }
  const productInCart = cart.find(p => p.id === productId);
  productInCart.count -= 1;
  if (productInCart.count == 0) {
    cart.splice(productIndex, 1);
  }
  renderCart();
}

function renderCart() {
  const cartItemList = document.getElementById('cart-items');
  cartItemList.innerHTML = '';
  cart.forEach(function (product) {
    const cartItemElement = document.createElement('li');
    cartItemElement.innerText = `${product.name} - $${product.price} x ${product.count}`;

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.classList.add('text-red-500', 'ml-2');
    removeBtn.addEventListener('click', function () {
      removeProductFromCart(product.id);
    });
    cartItemElement.appendChild(removeBtn);

    cartItemList.appendChild(cartItemElement);
  });
}

function getProductImageElement(product) {
  const productImageElement = document.createElement('img');
  productImageElement.src = product.image;
  productImageElement.alt = product.name;
  productImageElement.classList.add('w-full', 'mb-4');
  return productImageElement;
}

function getProductNameElement(productName) {
  const productNameElement = document.createElement('h3');
  productNameElement.innerText = productName;
  productNameElement.classList.add('text-lg', 'font-semibold');
  return productNameElement;
}

function getProductPriceElement(productPrice) {
  const productPriceElement = document.createElement('p');
  productPriceElement.textContent = `$${productPrice}`;
  productPriceElement.classList.add('text-gray-700');
  return productPriceElement;
}

function getAddToCartButton(product) {
  const addToCartBtn = document.createElement('button');
  addToCartBtn.innerText = 'Add to Cart';
  addToCartBtn.classList.add(
    'bg-blue-500',
    'hover:bg-blue-700',
    'text-white',
    'font-bold',
    'py-2',
    'px-4',
    'rounded',
    'mt-2'
  );
  addToCartBtn.addEventListener('click', function () {
    if (isProductExistInCart(product.id)) {
      const productInCart = cart.find(p => p.id === product.id);
      productInCart.count += 1;
    } else {
      product.count = 1;
      cart.push(product);
    }
    renderCart();
  });
  return addToCartBtn;
}

function getProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('bg-white', 'p-4', 'rounded', 'shadow');

  const productImage = getProductImageElement(product);
  card.appendChild(productImage);

  const productName = getProductNameElement(product.name);
  card.appendChild(productName);

  const productPrice = getProductPriceElement(product.price);
  card.appendChild(productPrice);

  const addToCartButton = getAddToCartButton(product);
  card.appendChild(addToCartButton);

  return card;
}

function renderProducts() {
  const productListContainer = document.getElementById('product-list');
  productListContainer.innerHTML = '';

  let categorizedProducts = products;
  if (selectedCategory) {
    categorizedProducts = products.filter(function (product) {
      return product.categories.includes(selectedCategory);
    });
  }

  categorizedProducts.forEach(function (product) {
    const productCard = getProductCard(product);
    productListContainer.appendChild(productCard);
  });
}

function getProductCategories() {
  const productCategories = products.map(function (product) {
    return product.categories;
  });
  const categoryFlatList = productCategories.flat();
  const uniqueCategories = new Set(categoryFlatList);
  return [...uniqueCategories];
}

function renderCategories() {
  const categoryContainer = document.getElementById('category-filters');
  categoryContainer.innerHTML = '';

  const categories = getProductCategories();
  categories.forEach(function (category) {
    const categoryBtn = document.createElement('button');
    categoryBtn.innerText = category;
    categoryBtn.classList.add(
      'bg-gray-200',
      'hover:bg-gray-300',
      'text-gray-800',
      'font-semibold',
      'py-2',
      'px-4',
      'rounded',
      'mr-2'
    );
    categoryBtn.addEventListener('click', function () {
      selectedCategory = category;
      renderProducts();
    });
    categoryContainer.appendChild(categoryBtn);
  });
}

renderProducts();
renderCategories();

const clearFilterBtn = document.getElementById('clear-filters-btn');
clearFilterBtn.addEventListener('click', function () {
  selectedCategory = null;
  renderProducts();
});

const checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn.addEventListener('click', function () {
  cart = [];
  renderCart();
});