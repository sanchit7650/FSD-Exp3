const products = [
  {
    name: "Wireless Headphones",
    price: 129.99,
    image: "https://via.placeholder.com/300x200?text=Headphones",
    inStock: true
  },
  {
    name: "Mechanical Keyboard",
    price: 89.99,
    image: "https://via.placeholder.com/300x200?text=Keyboard",
    inStock: false
  },
  {
    name: "Smart Watch",
    price: 199.99,
    image: "https://via.placeholder.com/300x200?text=Smart+Watch",
    inStock: true
  }
];

function createProductCard(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-name">${product.name}</div>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <span class="stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}">
        ${product.inStock ? 'In Stock' : 'Out of Stock'}
      </span>
    </div>
  `;
}

const container = document.getElementById("productContainer");
container.innerHTML = products.map(createProductCard).join("");