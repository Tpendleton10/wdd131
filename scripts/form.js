// Product array
const products = [
  { id: "prod001", name: "Super Blender 3000" },
  { id: "prod002", name: "Noise-Canceling Headphones" },
  { id: "prod003", name: "Smart Thermostat" },
  { id: "prod004", name: "Wireless Doorbell" }
];

// Populate product dropdown
window.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});
