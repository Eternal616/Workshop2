
const URL_BASE = "https://backendfalsojsonserver-dev-azcn.2.us-1.fl0.io/";

const idProduct = JSON.parse(localStorage.getItem("idProduct"));

const getProducts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const printTipoProducto = (tipoProduct) => {
    let html = "";
    tipoProduct.forEach((element) => {
        html += `<span>${element}</span>`;
    });

    return html;
};

const printSize = (stock) => {
    let html = "";

    const tallas = stock.map((item) => item.talla);
    const tallasDisponibles = [...new Set(tallas)];
    tallasDisponibles.forEach((item) => {
        let innerhtml = "";
        const colores = stock.filter((element) => element.talla === item);
        colores.forEach((color) => {
            innerhtml += `<span class="${item}" style="background-color:${color.color}; display:none">${color.color}</span>`;
        });
        html += `<button class="tallas">${item}</button>
                ${innerhtml}
        `;
    });

    return html;
};

const showColors = () => {
    const sizeButtons = document.querySelectorAll(".tallas");
    sizeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const colorsButtons = document.querySelectorAll(`.${button.innerText}`);
            colorsButtons.forEach((btn) => {
                btn.style.display = btn.style.display === "block" ? "none" : "block";
            });
        });
    });
};

const printDetailsProduct = (product) => {
    const h1 = document.querySelector("h1");
    const main = document.querySelector("main");

    h1.innerText = product.nombre;
    main.innerHTML = `
        <figure class="mainImage">
            <img src="${product.imagen[0]}">
        </figure>
        ${printTipoProducto(product.tipoProduct)}
        <span>${product.precioUnitario}</span>
        ${printSize(product.stock)}
        <span>${product.descripcion}</span>
    `;
};

document.addEventListener("DOMContentLoaded", async () => {
    const url = `${URL_BASE}products`;
    const products = await getProducts(url);
    const selectedProduct = products.find((product) => product.id === idProduct);
    printDetailsProduct(selectedProduct);
    showColors();
});