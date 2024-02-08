import { products } from "../modules/productos.js";



const containerCards = document.getElementById("containerCardProducts");

const goToDetailsProduct = () => {
    const cards = document.querySelectorAll(".cardProducto");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const idProduct = card.getAttribute("data-id");
            localStorage.setItem("idProduct", idProduct);
            location.href = "../pages/detailsProducts.html";
        });
    });
};

const imprimirProductos = (container, listadoproduct) => {
    container.innerHTML = "";
    listadoproduct.forEach(element => {
        container.innerHTML += `
        <article class="cardProducto" data-id="${element.id}" data-click="card">
            <img src=${element.imagen[0]} alt=${element.nombre} data-click="card">
            <h3 data-click="card">${element.nombre}</h3>
            <span data-click="card">$${element.precioUnitario}</span>
        </article>
        `;
    });
    goToDetailsProduct();
}
imprimirProductos(containerCards, products);



const mostrarTodosLosProductos = () => {
    imprimirProductos(containerCards, products);
}

const btnMostrarTodos = document.getElementById("mostrarTodos");

btnMostrarTodos.addEventListener("click", mostrarTodosLosProductos);


imprimirProductos(containerCards, products);