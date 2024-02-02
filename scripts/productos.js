const products = [
    {
    id: 1,
    nombre: "Luxury Charms Ring",
    codigo: 78205,
    precioUnitario: 620.73,
    tipoProduct: "anilllo",
    imagen: ["../imagenes/anillo1.png"],
    descripción: "anillo en baño de oro con una perla color naranja talla M",
    stock:  [{ color: "plateado", cantidad: 30 }],
},
    {
    id: 2,
    nombre: "Sparkling Ring ",
    codigo: 78206,
    precioUnitario: 620.73,
    tipoProduct: "anilllo",
    imagen: ["../imagenes/anillo2.png"],
    descripción: "anillo de oro talla S",
    stock:  [{ color: "plateado", cantidad: 30 }],
},

    {
    id: 3,
    nombre: "Blissful Bloom Ring",
    codigo: 78207,
    precioUnitario: 700.73,
    tipoProduct: "anilllo",
    imagen: ["../imagenes/anilllo3.png"],
    descripción: "anillo con incrustaciones de diamantes talla s",
    stock:  [{ color: "plateado", cantidad: 30 }],
},
    {
    id: 4,
    nombre: "Divine Diamonds",
    codigo: 78208,
    precioUnitario: 629.73,
    tipoProduct: "anilllo",
    imagen: ["../imagenes/anilllo4.png"],
    descripción: "anillo con en baño de oro con perlas y una perla",
    stock:  [{ color: "plateado", cantidad: 30 }],
},
    {
    id: 5,
    nombre: "Exquisite Earrings",
    codigo: 78209,
    precioUnitario: 120.28,
    tipoProduct: "aretes",
    imagen: ["../imagenes/aretes1.png"],
    descripción: "Aretes elegantes para ocasiones especiales ",
    stock:  [{ color: "plateado", cantidad: 30 }],
},
    {
    id: 6,
    nombre: "Delights Earrings",
    codigo: 782010,
    precioUnitario: 220.28,
    tipoProduct: "aretes",
    imagen: ["../imagenes/arete2.png"],
    descripción: "Aretes  sencillos para uso diario ",
    stock:  [{ color: "plateado", cantidad: 30 }],
},
    {
    id: 7,
    nombre: "Serene Solitaire Earrings",
    codigo: 782011,
    precioUnitario: 125.28,
    tipoProduct: "aretes",
    imagen: ["../imagenes/aretes3.png"],
    descripción: "Aretes  sencillos para uso diario ",
    stock:  [{ color: "plateado", cantidad: 30 }],
},
    {
    id: 8,
    nombre: "Timeless Treasures",
    codigo: 782012,
    precioUnitario: 128.28,
    tipoProduct: "aretes",
    imagen: ["../imagenes/aretes4.png"],
    stock:  [{ color: "plateado", cantidad: 30 }],
},
    {
    id: 9,
    nombre: "Radiance Necklace",
    codigo: 782013,
    precioUnitario: 168.76,
    tipoProduct: "cadena",
    imagen: ["../imagenes/cadena1.png"],
    descripción: "Cadena sencilla elegante dorada  ",
    stock:  [{ color: "dorado", cantidad: 30 }],
},
    {
    id: 10,
    nombre: "Glamour Necklace",
    codigo: 782014,
    precioUnitario: 626.76,
    tipoProduct: "cadena",
    imagen: ["../imagenes/cadena2.png"],
    descripción: "Cadena sencilla con dijes de corazones dorada ",
    stock:  [{ color: "dorado", cantidad: 30 }],
},

    {
    id: 11,
    nombre: "Luxury Gems Necklace",
    codigo: 782015,
    precioUnitario: 168.76,
    tipoProduct: "cadena",
    imagen: ["../imagenes/cadena2.png"],
    descripción: "Cadena con dije grande con incrustaciones de color plata  ",
    stock:  [{ color: "plata", cantidad: 30 }],
},
    {
    id: 12,
    nombre: "Radiant Reflections",
    codigo: 782015,
    precioUnitario: 150.76,
    tipoProduct: "collar",
    imagen: ["../imagenes/collar1.png"],
    descripción: "collar sencillo con esmeraldas",
    stock:  [{ color: "plateado", cantidad: 30 }],
},
    {
    id: 13,
    nombre: "Majestic Mementos",
    codigo: 782016,
    precioUnitario: 140.76,
    tipoProduct: "collar",
    imagen: ["../imagenes/collar2.png"],
    descripción: "Collar elegante pomposo  ",
    stock:  [{ color: "multicolor", cantidad: 10 }],
},

    {
    id: 14,
    nombre: "simple bracelet",
    codigo: 782017,
    precioUnitario: 110.76,
    tipoProduct: "pulsera",
    imagen: ["../imagenes/pulsera3.png"],
    descripción: "pulsera sencilla con esmeraldas   ",
    stock:  [{ color: "plateado", cantidad: 30 }],
    },
];


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