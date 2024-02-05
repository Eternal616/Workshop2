import { products } from "../modules/productos.js";

const containerCards = document.getElementById("containerCardProducts");

const imprimirProductos = (container, listadoproduct) => {
    container.innerHTML = "";
    listadoproduct.forEach(element => {
        container.innerHTML += `
        <article class = "card" data-click="card">
        <img src=${element.imagen[0]} alt=${element.nombre} data-click="card">
        <h3 data-click="card">${element.nombre}</h3>
        <span data-click="card">$${element.precioUnitario}</span>
            </article>
        `;
    });
}
imprimirProductos(containerCards, products);

document.addEventListener("click", (Event) => {

    if(Event.target.getAttribute("data-click") === "card"){
        location.href ="../pages/detailsProducts.html";
    }

})

