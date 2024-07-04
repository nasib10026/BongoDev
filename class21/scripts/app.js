'use strict';

class Product {
  constructor(id, name, price, image, categories) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.categories = categories;
    this.count = 0; // Initialize count for cart purposes
  }
}

class Cart {
  constructor() {
    this.items = [];
  }

  isProductExist(productId) {
    return this.items.findIndex(product => product.id === productId) !== -1;
  }

  addProduct(product) {
    if (this.isProductExist(product.id)) {
      const productInCart = this.items.find(p => p.id === product.id);
      productInCart.count += 1;
    } else {
      product.count = 1;
      this.items.push(product);
    }
    this.render();
  }

  removeProduct(productId) {
    const productIndex = this.items.findIndex(product => product.id === productId);
    if (productIndex === -1) {
      alert('Product is not in the cart!!!');
      return;
    }
    const productInCart = this.items[productIndex];
    productInCart.count -= 1;
    if (productInCart.count === 0) {
      this.items.splice(productIndex, 1);
    }
    this.render();
  }

  render() {
    const cartItemList = document.getElementById('cart-items');
    cartItemList.innerHTML = '';
    this.items.forEach(product => {
      const cartItemElement = document.createElement('li');
      cartItemElement.innerText = `${product.name} - $${product.price} x ${product.count}`;

      const removeBtn = document.createElement('button');
      removeBtn.innerText = 'Remove';
      removeBtn.classList.add('text-red-500', 'ml-2');
      removeBtn.addEventListener('click', () => this.removeProduct(product.id));
      cartItemElement.appendChild(removeBtn);

      cartItemList.appendChild(cartItemElement);
    });
  }

  clear() {
    this.items = [];
    this.render();
  }
}

class Shop {
  constructor(products) {
    this.products = products.map(
      p => new Product(p.id, p.name, p.price, p.image, p.categories)
    );
    this.cart = new Cart();
    this.selectedCategory = null;
  }

  getProductCategories() {
    const productCategories = this.products.map(product => product.categories);
    const categoryFlatList = productCategories.flat();
    const uniqueCategories = new Set(categoryFlatList);
    return [...uniqueCategories];
  }

  renderCategories() {
    const categoryContainer = document.getElementById('category-filters');
    categoryContainer.innerHTML = '';

    const categories = this.getProductCategories();
    categories.forEach(category => {
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
      categoryBtn.addEventListener('click', () => {
        this.selectedCategory = category;
        this.renderProducts();
      });
      categoryContainer.appendChild(categoryBtn);
    });
  }

  getProductImageElement(product) {
    const productImageElement = document.createElement('img');
    productImageElement.src = product.image;
    productImageElement.alt = product.name;
    productImageElement.classList.add('w-full', 'mb-4');
    return productImageElement;
  }

  getProductNameElement(productName) {
    const productNameElement = document.createElement('h3');
    productNameElement.innerText = productName;
    productNameElement.classList.add('text-lg', 'font-semibold');
    return productNameElement;
  }

  getProductPriceElement(productPrice) {
    const productPriceElement = document.createElement('p');
    productPriceElement.textContent = `$${productPrice}`;
    productPriceElement.classList.add('text-gray-700');
    return productPriceElement;
  }

  getAddToCartButton(product) {
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
    addToCartBtn.addEventListener('click', () => this.cart.addProduct(product));
    return addToCartBtn;
  }

  getProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('bg-white', 'p-4', 'rounded', 'shadow');

    const productImage = this.getProductImageElement(product);
    card.appendChild(productImage);

    const productName = this.getProductNameElement(product.name);
    card.appendChild(productName);

    const productPrice = this.getProductPriceElement(product.price);
    card.appendChild(productPrice);

    const addToCartButton = this.getAddToCartButton(product);
    card.appendChild(addToCartButton);

    return card;
  }

  renderProducts() {
    const productListContainer = document.getElementById('product-list');
    productListContainer.innerHTML = '';

    let categorizedProducts = this.products;
    if (this.selectedCategory) {
      categorizedProducts = this.products.filter(product =>
        product.categories.includes(this.selectedCategory)
      );
    }

    categorizedProducts.forEach(product => {
      const productCard = this.getProductCard(product);
      productListContainer.appendChild(productCard);
    });
  }
}

const productsData = [{
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

const shop = new Shop(productsData);
shop.renderProducts();
shop.renderCategories();

document.getElementById('clear-filters-btn').addEventListener('click', () => {
  shop.selectedCategory = null;
  shop.renderProducts();
});

document.getElementById('checkout-btn').addEventListener('click', () => {
  shop.cart.clear();
});
