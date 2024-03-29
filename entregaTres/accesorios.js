const products = [
  {
    id: 1,
    nombre: "Luxury Charms Ring",
    codigo: 78205,
    precioUnitario: 620.73,
    tipoProduct: "anilllo",
    imagen: ["./imagenes/anillo1.png"],
    descripción: "anillo en baño de oro con una perla color naranja talla M",
    stock: [{
      talla:"s",
      cantidad:7,
      color:"Dorado"
    }, 
    {
      talla:"M",
      cantidad:8,
      color:"plata"
    },
  ],
  },
  {
    id: 2,
    nombre: "Sparkling Ring ",
    codigo: 78206,
    precioUnitario: 620.73,
    tipoProduct: "anilllo",
    imagen: ["./imagenes/anillo2.png"],
    descripción: "anillo de oro talla S",
    stock: [{
      talla:"s",
      cantidad:9,
      color:"Dorado"
    }, 
    {
      talla:"M",
      cantidad:10,
      color:"Dorado"
    },
  ],
  },

  {
    id: 3,
    nombre: "Blissful Bloom Ring",
    codigo: 78207,
    precioUnitario: 700.73,
    tipoProduct: "anilllo",
    imagen: "./imagenes/anilllo3.png",
    descripción: "anillo con incrustaciones de diamantes talla s",
    stock: [{
      talla:"s",
      cantidad:3,
      color:"plata"
    }, 
    {
      talla:"M",
      cantidad:2,
      color:"plata"
    },
  ],
  },
  
  {
    id: 4,
    nombre: "Divine Diamonds",
    codigo: 78208,
    precioUnitario: 629.73,
    tipoProduct: "anilllo",
    imagen: "./imagenes/anilllo4.png",
    descripción: "anillo con en baño de oro con perlas y una perla",
    stock: [{
      talla:"s",
      cantidad:8,
      color:"Dorado"
    }, 
    {
      talla:"M",
      cantidad:3,
      color:"plata"
    },
  ],

  },

  {
    id: 5,
    nombre: "Exquisite Earrings",
    codigo: 78209,
    precioUnitario: 120.28,
    tipoProduct: "aretes",
    imagen: "./imagenes/aretes1.png",
    descripción: "Aretes elegantes para ocasiones especiales ",
    stock: [{
      talla:"s",
      cantidad:3,
      color:"Dorado"
    }, 
    {
      talla:"M",
      cantidad:2,
      color:"plata"
    },
  ],

  },
  {
    id: 6,
    nombre: "Delights Earrings",
    codigo: 782010,
    precioUnitario: 220.28,
    tipoProduct: "aretes",
    imagen: "./imagenes/arete2.png",
    descripción: "Aretes  sencillos para uso diario ",
    stock: [{
      talla:"s",
      cantidad:7,
      color:"Dorado"
    }, 
    {
      talla:"M",
      cantidad:8,
      color:"plata"
    },
  ],
  
  },
  {
    id: 7,
    nombre: "Serene Solitaire Earrings",
    codigo: 782011,
    precioUnitario: 125.28,
    tipoProduct: "aretes",
    imagen: "./imagenes/aretes3.png",
    descripción: "Aretes  sencillos para uso diario ",
    stock: [{
      talla:"s",
      cantidad:7,
      color:"Dorado"
    }, 
    {
      talla:"M",
      cantidad:8,
      color:"plata"
    },
  ],
  
  },
  {
    id: 8,
    nombre: "Timeless Treasures",
    codigo: 782012,
    precioUnitario: 128.28,
    tipoProduct: "aretes",
    imagen: "./imagenes/aretes4.png",
    descripción: "Aretes  medianos  para uso diario ",
    stock: [{
      talla:"s",
      cantidad:7,
      color:"Dorado"
    }, 
    {
      talla:"M",
      cantidad:8,
      color:"plata"
    },
  ],
  
  },
  {
    id: 9,
    nombre: "Radiance Necklace",
    codigo: 782013,
    precioUnitario: 168.76,
    tipoProduct: "cadena",
    imagen: "./imagenes/cadena1.png",
    descripción: "Cadena sencilla elegante dorada  ",
    stock: [{
      talla:"s",
      cantidad:7,
      color:"Dorado"
    }, 
    {
      talla:"M",
      cantidad:8,
      color:"plata"
    },
  ],
  
  },
  {
    id: 10,
    nombre: "Glamour Necklace",
    codigo: 782014,
    precioUnitario: 626.76,
    tipoProduct: "cadena",
    imagen: "./imagenes/cadena2.png",
    descripción: "Cadena sencilla con dijes de corazones dorada ",
    stock: [{
      talla:"s",
      cantidad:7,
      color:"Dorado"
    }, 
    {
      talla:"M",
      cantidad:8,
      color:"plata"
    },
  ],
  
  },
  {
    id: 11,
    nombre: "Luxury Gems Necklace",
    codigo: 782015,
    precioUnitario: 168.76,
    tipoProduct: "cadena",
    imagen: "./imagenes/cadena2.png",
    descripción: "Cadena con dije grande con incrustaciones de color plata  ",
    stock: [{
      talla:"s",
      cantidad:7,
      color:"Dorado"
    }, 
    {
      talla:"M",
      cantidad:8,
      color:"plata"
    },
  ],
  
  },
  {
    id: 12,
    nombre: "Radiant Reflections",
    codigo: 782015,
    precioUnitario: 150.76,
    tipoProduct: "collar",
    imagen: "./imagenes/collar1.png",
    descripción: "collar sencillo con esmeraldas   ",
    stock: [{
      talla:"s",
      cantidad:7,
      color:"Dorado"
    }, 
    {
      talla:"M",
      cantidad:8,
      color:"plata"
    },
  ],

  },
  {
    id: 13,
    nombre: "Majestic Mementos",
    codigo: 782016,
    precioUnitario: 140.76,
    tipoProduct: "collar",
    imagen: "./imagenes/collar2.png",
    descripción: "Collar elegante pomposo  ",
    stock: [{
      talla:"s",
      cantidad:7,
      color:"Dorado"
    }, 
    {
      talla:"M",
      cantidad:8,
      color:"plata"
    },
  ],
  
  },

  {
    id: 14,
    nombre: "simple bracelet",
    codigo: 782017,
    precioUnitario: 110.76,
    tipoProduct: "pulsera",
    imagen: "./imagenes/pulsera3.png",
    descripción: "pulsera sencilla con esmeraldas   ",
    stock: [{
      talla:"s",
      cantidad:7,
      color:"Dorado"
    }, 
    {
      talla:"M",
      cantidad:8,
      color:"plata"
    },
  ],
  
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

//funcion 2: Escribir una función que realice la búsqueda de productos por nombre, etc.

function buscarProductosPorNombre(productos, terminoBusqueda) {
  const resultados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );
  return resultados;
}

// Datos de prueba
const terminoBusqueda = "Majestic";

// Llamada a la función
const resultadosBusqueda = buscarProductosPorNombre(products, terminoBusqueda);

// Mostrar resultados en la consola
console.log("Resultados de la búsqueda:");
console.log(resultadosBusqueda);

//funcion 4: total a pagar

function calcularTotalCompra(productos) {
  let total = 0;
  productos.forEach((producto) => {
    total += producto.cantidad * producto.precioUnitario;
  });
  return total;
}

// Datos de prueba
const productosSeleccionados = [
  { id: 1, cantidad: 2, precioUnitario: 620.73 },
  { id: 5, cantidad: 1, precioUnitario: 120.28 },
  { id: 9, cantidad: 3, precioUnitario: 168.76 },
];

// Calcular el total de la compra
const totalCompra = calcularTotalCompra(productosSeleccionados);

// Mostrar el resultado en la consola
console.log("Total a pagar de la compra:", totalCompra);
