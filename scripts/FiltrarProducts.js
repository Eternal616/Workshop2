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
            <h2>${producto.nombre}</h2>
            <p>Código: ${producto.codigo}</p>
            <p>Precio: $${producto.precioUnitario}</p>
            <p>Descripción: ${producto.descripcion}</p>
            <img src="${producto.imagen[0]}" alt="${producto.nombre}">
        `;
        resultadoDiv.appendChild(productoDiv);
    });
}


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
