import { products } from "../modules/productos.js";

function mostrarProductos() {
    const productosContainer = document.getElementById("productosContainer");
  
    // Limpiar el contenedor antes de mostrar los productos
    productosContainer.innerHTML = '';
  
    // Iterar sobre el array de productos y crear un elemento para cada uno
    productos.forEach(producto => {
    const productoElement = document.createElement("div");
    productoElement.textContent = `${producto.nombre} - Precio: ${producto.precio}`;
    productosContainer.appendChild(productoElement);
    });
  }