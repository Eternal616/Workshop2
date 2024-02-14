//import { products } from "../modules/productos.js";

const URL_BASE = "https://backendfalsojsonserver-dev-azcn.2.us-1.fl0.io/";
const URL_PRODUCTS = URL_BASE + "products";

async function obtenerProductos() {
    try {
        const response = await fetch(URL_PRODUCTS);
        if (!response.ok) {
            throw new Error('No se pudo obtener la lista de productos');
        }
        const productos = await response.json();
        console.log('Productos obtenidos:', productos); 
        return productos;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}




// Función para filtrar productos por tipo
function filtrarProductosPorTipo(productos, tipo) {
    const productosFiltrados = productos.filter(producto => producto.tipoProduct.includes(tipo));
    console.log('Productos filtrados por tipo:', productosFiltrados); 
    return productosFiltrados;
}

// Función para mostrar productos en el HTML
function mostrarProductos(products) {
    const resultadoDiv = document.getElementById('containerCardProducts');
    resultadoDiv.innerHTML = ''; // Limpiar resultados anteriores

    products.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
        <article class="cardProducto" data-id="${producto.id}" data-click="card">
        <img src=${producto.imagen[0]} alt=${producto.nombre} data-click="card">
        <h3 data-click="card">${producto.nombre}</h3>
        <span data-click="card">$${producto.precioUnitario}</span>
    </article>
    `;
        resultadoDiv.appendChild(productoDiv);
        const imagen = productoDiv.querySelector('img');
        imagen.addEventListener('click', () => {
            const idProduct = producto.id;
            localStorage.setItem('idProduct', idProduct);
            location.href = '../pages/detailsProducts.html';
    });
});
}

// Manejar clic en los botones de tipo de producto
document.addEventListener('DOMContentLoaded', async function() {
    const tipoBtns = document.querySelectorAll('.sort__buton');
    const productos = await obtenerProductos();

    tipoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tipoAFiltrar = this.dataset.tipo;
            const productosFiltrados = filtrarProductosPorTipo(productos, tipoAFiltrar);
            mostrarProductos(productosFiltrados);
        });
    });
});


