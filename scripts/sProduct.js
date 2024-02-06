import { products } from "../modules/productos.js";



const containerCards = document.getElementById("containerCardProducts");

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
}
imprimirProductos(containerCards, products);

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

goToDetailsProduct();
