import { products } from "../modules/productos.js";

// Función para filtrar productos por tipo
function filtrarProductosPorTipo(tipo) {
    const productosFiltrados = products.filter(producto => producto.tipoProduct.includes(tipo));
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
    });
}

// Manejar clic en los botones de tipo de producto
document.addEventListener('DOMContentLoaded', function() {
    const tipoBtns = document.querySelectorAll('.sort__buton');

    tipoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tipoAFiltrar = this.dataset.tipo;
            const productosFiltrados = filtrarProductosPorTipo(tipoAFiltrar);
            mostrarProductos(productosFiltrados);
        });
    });
});


