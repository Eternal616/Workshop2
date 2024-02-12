// import { products } from "../modules/productos.js";

const URL_BASE = "https://backendfalsojsonserver-dev-azcn.2.us-1.fl0.io/";

const getproducts = async (url) => {
    try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    } catch (error) {
    console.log(error);
    return [];
    }
};

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
    listadoproduct.forEach((element) => {
    container.innerHTML += `
        <article class="cardProducto" data-id="${element.id}" data-click="card">
            <img src=${element.imagen[0]} alt=${element.nombre} data-click="card">
            <h3 data-click="card">${element.nombre}</h3>
            <span data-click="card">$${element.precioUnitario}</span>
        </article>
        `;
    });
    goToDetailsProduct();
};

document.addEventListener("DOMContentLoaded", async () => {
    const url = `${URL_BASE}products`;
    const productos = await getproducts(url);
    imprimirProductos(containerCards, productos);
    goToDetailsProduct();
    });


const mostrarTodosLosProductos = () => {
imprimirProductos(containerCards, getproducts);
};

const btnMostrarTodos = document.getElementById("mostrarTodos");

btnMostrarTodos.addEventListener("click", mostrarTodosLosProductos);




function ordenarAscendente(arreglo) {
  return arreglo.slice().sort((a, b) => a.precioUnitario - b.precioUnitario);
}

function ordenarDescendente(arreglo) {
  return arreglo.slice().sort((a, b) => b.precioUnitario - a.precioUnitario);
}

console.log(
  "El orden del precio de los productos en orden Ascendente es:",
  ordenarAscendente(products)
);
console.log(
  "El orden del precio de los productos en forma Descendente es:",
  ordenarDescendente(products)
);

const selectOrdenar = document.getElementById("ordenarProductos");

// Agregar evento de cambio al select
selectOrdenar.addEventListener("change", () => {
  const opcionSeleccionada = selectOrdenar.value;
  let productosOrdenados;

  if (opcionSeleccionada === "ascendente") {
    productosOrdenados = ordenarAscendente(products);
  } else if (opcionSeleccionada === "descendente") {
    productosOrdenados = ordenarDescendente(products);
  }

  imprimirProductos(containerCards, productosOrdenados);
});
