import { products } from "./data.js";

const container = document.getElementById("product-container");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "card";

  const discounted = product.price - (product.price * product.discount / 100);

  div.innerHTML = `
    <img src="${product.image}">
    <h3>${product.name}</h3>
    <p>⭐ ${product.rating}</p>
    <p>${product.discount}% OFF</p>
    <p><del>₹${product.price}</del> ₹${discounted}</p>
    <button>Add to Cart</button><br><br>
    <button>Buy</button>
  `;

  container.appendChild(div);
});
