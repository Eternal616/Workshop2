let products = [
  {
    id: 1,
    nombre: "Luxury Charms Ring",
    codigo: 78205,
    precioUnitario: 620.73,
    tipoProduct: "anilllo",
    imagen: "./imagenes/anillo1.png",
    descripción: "anillo en baño de oro con una perla color naranja talla M",
    cantidadEnStock: 4,
  },
  {
    id: 2,
    nombre: "Sparkling Ring ",
    codigo: 78206,
    precioUnitario: 620.73,
    tipoProduct: "anilllo",
    imagen: "./imagenes/anillo2.png",
    descripción: "anillo de oro talla S",
    cantidadEnStock: 6,
  },

  {
    id: 3,
    nombre: "Blissful Bloom Ring",
    codigo: 78207,
    precioUnitario: 700.73,
    tipoProduct: "anilllo",
    imagen: "./imagenes/anilllo3.png",
    descripción: "anillo con incrustaciones de diamantes talla s",
    cantidadEnStock: 2,
  },
  {
    id: 4,
    nombre: "Divine Diamonds",
    codigo: 78208,
    precioUnitario: 629.73,
    tipoProduct: "anilllo",
    imagen: "./imagenes/anilllo4.png",
    descripción: "anillo con en baño de oro con perlas y una perla",
    cantidadEnStock: 5,
  },
  
  {
    id: 5,
    nombre: "Exquisite Earrings",
    codigo: 78209,
    precioUnitario: 120.28,
    tipoProduct: "aretes",
    imagen: "./imagenes/aretes1.png",
    descripción: "Aretes elegantes para ocasiones especiales ",
    cantidadEnStock: 7,
  },
  {
    id: 6,
    nombre: "Delights Earrings",
    codigo: 782010,
    precioUnitario: 220.28,
    tipoProduct: "aretes",
    imagen: "./imagenes/arete2.png",
    descripción: "Aretes  sencillos para uso diario ",
    cantidadEnStock: 10,
  },
  {
    id: 7,
    nombre: "Serene Solitaire Earrings",
    codigo: 782011,
    precioUnitario: 125.28,
    tipoProduct: "aretes",
    imagen: "./imagenes/aretes3.png",
    descripción: "Aretes  sencillos para uso diario ",
    cantidadEnStock: 5,
  },
  {
    id: 8,
    nombre: "Timeless Treasures",
    codigo: 782012,
    precioUnitario: 128.28,
    tipoProduct: "aretes",
    imagen: "./imagenes/aretes4.png",
    descripción: "Aretes  medianos  para uso diario ",
    cantidadEnStock: 6,
  },
  {
    id: 9,
    nombre: "Radiance Necklace",
    codigo: 782013,
    precioUnitario: 168.76,
    tipoProduct: "cadena",
    imagen: "./imagenes/cadena1.png",
    descripción: "Cadena sencilla elegante dorada  ",
    cantidadEnStock: 4,
  },
  {
    id: 10,
    nombre: "Glamour Necklace",
    codigo: 782014,
    precioUnitario: 626.76,
    tipoProduct: "cadena",
    imagen: "./imagenes/cadena2.png",
    descripción: "Cadena sencilla con dijes de corazones dorada ",
    cantidadEnStock: 4,
  },
  {
    id: 11,
    nombre: "Luxury Gems Necklace",
    codigo: 782015,
    precioUnitario: 168.76,
    tipoProduct: "cadena",
    imagen: "./imagenes/cadena2.png",
    descripción: "Cadena con dije grande con incrustaciones de color plata  ",
    cantidadEnStock: 5,
  },
  {
    id: 12,
    nombre: "Radiant Reflections",
    codigo: 782015,
    precioUnitario: 150.76,
    tipoProduct: "collar",
    imagen: "./imagenes/collar1.png",
    descripción: "collar sencillo con esmeraldas   ",
    cantidadEnStock: 2,
  },
  {
    id: 13,
    nombre: "Majestic Mementos",
    codigo: 782016,
    precioUnitario: 140.76,
    tipoProduct: "collar",
    imagen: "./imagenes/collar2.png",
    descripción: "Collar elegante pomposo  ",
    cantidadEnStock: 3,
  },

{
    id: 14,
    nombre: "simple bracelet",
    codigo: 782017,
    precioUnitario: 110.76,
    tipoProduct: "pulsera",
    imagen: "./imagenes/pulsera3.png",
    descripción: "pulsera sencilla con esmeraldas   ",
    cantidadEnStock: 4,
  },
  

];

//Declaración de la función que reciba como parámetros un array de productos y el nombre de tipo de producto//
//  que utilice la función de array que permita filtrar la lista por la  categoría o tipo y devuelva el array resultante.

function filtrarPorTipo(array, tipo) {
  return array.filter((producto) => producto.tipoProduct === tipo);
}

// llamar la función pasándole como argumentos la lista de productos declarado en el ítem anterior
//y cualquier tipo de  accesorio que exista en la lista y, por último, mostrar el resultado en la consola del
//navegador
let resultadoFiltrado = filtrarPorTipo(products, "aretes");
console.log("La lista de productos filtrados es:", resultadoFiltrado);

// Crear una función que ordene un array de productos por precios de manera ascendente  y descendente
//y retorne el array resultante. Ejecutar la función y mostrar el resultado en consola

function ordenarAscendente(arreglo) {
  return arreglo.slice().sort((a, b) => a.precioUnitario - b.precioUnitario);
}

function ordenardescendente(arreglo) {
  return arreglo.slice().sort((a, b) => b.precioUnitario - a.precioUnitario);
}

console.log(
  "El orden del precio de los productos en orden Ascendente es:",
  ordenarAscendente(products)
);
console.log(
  "El orden del precio de los productos en forma Descendente es:",
  ordenardescendente(products)
);
