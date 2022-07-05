let precioTotal = 0;

//function suma para calcular precio total
const suma = (a, b) => a + b;

//funcion constructora de productos
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = 0;
  }

  vender(cantida) {
    precioTotal = suma(precioTotal, cantida * this.precio);
    this.cantidad = this.cantidad + cantida;
  }
}

//Productos
const producto1 = new Producto("Royal Canin gato - Strelized x 7kg", 3539.99);
const producto2 = new Producto("ProPlan gato - Adulto x7kg", 3249.99);
const producto3 = new Producto("Royal Canin perro - Adulto x 10kg", 3500);
const producto4 = new Producto("ProPlan perro - Adulto x10kg", 3200);
const producto5 = new Producto("Royal Canin gato - Kitten x 7kg", 3249.99);
const producto6 = new Producto("ProPlan gato - Kitten x7kg", 3149.99);
const producto7 = new Producto("Royal Canin - Alimento humedo - control 90gr", 245);
const producto8 = new Producto("Royal Canin - Alimento humedo - agile 90gr", 245);
const producto9 = new Producto("Royal Canin - Alimento humedo - adult 90gr", 245);
const producto10 = new Producto("Royal Canin - Alimento humedo - smell 90gr", 245);
const producto11 = new Producto("ProPlan - Alimento humedo - control 90gr", 215);
const producto12 = new Producto("ProPlan - Alimento humedo - agile 90gr", 215);
const producto13 = new Producto("ProPlan - Alimento humedo - adult 90gr", 215);
const producto14 = new Producto("ProPlan - Alimento humedo - kitten 90gr", 215);

alert(
  "Gracias por venir a goPet!\nElegí lo mejor para tu mascota!"
);

let eleccionProducto = parseInt(
  prompt(`Seleccioná el producto:
    (1) ${producto1.nombre} 
    (2) ${producto2.nombre}
    (3) ${producto3.nombre}
    (4) ${producto4.nombre}
    (5) ${producto5.nombre}
    (6) ${producto6.nombre}
    (7) ${producto7.nombre}
    (8) ${producto8.nombre}
    (9) ${producto9.nombre}
    (10) ${producto10.nombre}
    (11) ${producto11.nombre}
    (12) ${producto12.nombre}
    (13) ${producto13.nombre}
    (14) ${producto14.nombre}
    (0) No quiero comprar.`)
);

while (eleccionProducto !== 0) {
  let cantidad = parseInt(prompt("¿Cuantas unidades querés agregar?"));
  if (isNaN(cantidad)) {
    alert("Ingresá una cantidad válida");
  } else {
    if (eleccionProducto === 1) {
      producto1.vender(cantidad);
    } else if (eleccionProducto === 2) {
      producto2.vender(cantidad);
    } else if (eleccionProducto === 3) {
      producto3.vender(cantidad);
    } else if (eleccionProducto === 4) {
      producto4.vender(cantidad);
    } else if (eleccionProducto === 5) {
      producto5.vender(cantidad);
    } else if (eleccionProducto === 6) {
      producto6.vender(cantidad);
    } else if (eleccionProducto === 7) {
      producto7.vender(cantidad);
    } else if (eleccionProducto === 8) {
      producto8.vender(cantidad);
    } else if (eleccionProducto === 9) {
      producto9.vender(cantidad);
    } else if (eleccionProducto === 10) {
      producto10.vender(cantidad);
    } else if (eleccionProducto === 11) {
      producto11.vender(cantidad);
    } else if (eleccionProducto === 12) {
      producto12.vender(cantidad);
    } else if (eleccionProducto === 13) {
      producto13.vender(cantidad);
    } else if (eleccionProducto === 14) {
      producto14.vender(cantidad);
    } else {
      alert("Ingresá una opción válida");
    }
  }
  
  let seguirComprando = prompt("¿Querés comprar algo más?").toLowerCase();

  while (seguirComprando === "si") {
    let eleccionProducto = parseInt(
      prompt(`Seleccioná el producto:
      (1) ${producto1.nombre} 
      (2) ${producto2.nombre}
      (3) ${producto3.nombre}
      (4) ${producto4.nombre}
      (5) ${producto5.nombre}
      (6) ${producto6.nombre}
      (7) ${producto7.nombre}
      (8) ${producto8.nombre}
      (9) ${producto9.nombre}
      (10) ${producto10.nombre}
      (11) ${producto11.nombre}
      (12) ${producto12.nombre}
      (13) ${producto13.nombre}
      (14) ${producto14.nombre}
      `)
    );
    cantidad = parseInt(prompt("¿Cuantas unidades querés agregar?"));
    if (isNaN(cantidad)) {
      alert("Ingresar una cantidad válida");
    } else {
      if (eleccionProducto === 0) {
        alert(
            "Gracias por visitarnos\nEn goPet estamos para lo que necesite tu mejor amigo\nEperamos volver a verte pronto."
        );
        break;
      } else if (eleccionProducto === 1) {
        producto1.vender(cantidad);
      } else if (eleccionProducto === 2) {
        producto2.vender(cantidad);
      } else if (eleccionProducto === 3) {
        producto3.vender(cantidad);
      } else if (eleccionProducto === 4) {
        producto4.vender(cantidad);
      } else if (eleccionProducto === 5) {
        producto5.vender(cantidad);
      } else if (eleccionProducto === 6) {
        producto6.vender(cantidad);
      } else if (eleccionProducto === 7) {
        producto7.vender(cantidad);
      } else if (eleccionProducto === 8) {
        producto8.vender(cantidad);
      } else if (eleccionProducto === 9) {
        producto9.vender(cantidad);
      } else if (eleccionProducto === 10) {
        producto10.vender(cantidad);
      } else if (eleccionProducto === 11) {
        producto11.vender(cantidad);
      } else if (eleccionProducto === 12) {
        producto12.vender(cantidad);
      } else if (eleccionProducto === 13) {
        producto13.vender(cantidad);
      } else if (eleccionProducto === 14) {
        producto14.vender(cantidad);
      } else {
        alert("Ingresá una opcion válida");
      }
    }
    seguirComprando = prompt("¿Necesitás agregar algo más al carrito?").toLowerCase();
  }

  alert(
    `El total a pagar es de $ ${precioTotal}.\n¡Muchas Gracias por confiar en nosotros!`
  );
  break;
}

alert("Gracias por visitarnos\nEn goPet estamos para lo que necesite tu mejor amigo\nEperamos volver a verte pronto.");