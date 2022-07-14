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

  vender(cantidad) {
    precioTotal = suma(precioTotal, cantidad * this.precio);
    this.cantidad = this.cantidad + cantidad;
  }
}

//Productos
const productos = [
  new Producto("Royal Canin gato - Strelized x 7kg", 3539.99),
  new Producto("ProPlan gato - Adulto x7kg", 3249.99),
  new Producto("Royal Canin perro - Adulto x 10kg", 3500),
  new Producto("ProPlan perro - Adulto x10kg", 3200),
  new Producto("Royal Canin gato - Kitten x 7kg", 3249.99),
  new Producto("ProPlan gato - Kitten x7kg", 3149.99),
  new Producto("Royal Canin - Alimento humedo - control 90gr", 245),
  new Producto("Royal Canin - Alimento humedo - agile 90gr", 245),
  new Producto("Royal Canin - Alimento humedo - adult 90gr", 245),
  new Producto("Royal Canin - Alimento humedo - smell 90gr", 245),
  new Producto("ProPlan - Alimento humedo - control 90gr", 215),
  new Producto("ProPlan - Alimento humedo - agile 90gr", 215),
  new Producto("ProPlan - Alimento humedo - adult 90gr", 215),
  new Producto("ProPlan - Alimento humedo - kitten 90gr", 215),
];

console.log(productos);

alert(
  "Gracias por venir a goPet!\nElegí lo mejor para tu mascota!"
);

const nombres = [
  "Seleccioná el producto:",
  ...productos.map((prod, i) => `(${i + 1}) ${prod.nombre}`),
  "(0) Cancelar compra.",
];

function cargandoProductos() {
  let productoElegido = parseInt(prompt(nombres.join("\n")));
  let continuaCompra = true;
  while (productoElegido !== 0 && continuaCompra) {
    
    if (productoElegido >= 1 && productoElegido <= productos.length) {
      let cantidad = parseInt(prompt("¿Cuantas unidades querés agregar?"));
      if (isNaN(cantidad)) {
        alert("Ingresá una cantidad válida");
      } else {
        productos[productoElegido - 1].vender(cantidad);
      }
    } else {
      alert("Ingresá una opcion válida");
    }
    continuaCompra = confirm("¿Necesitás agregar algo más al carrito?");
   
    if (continuaCompra) {
      return cargandoProductos();
    }
  }

  if (precioTotal != 0) {
    
    let listaVendidos = productos
    .filter((prod) => prod.cantidad > 0)
    .map((prod) => `• ${prod.cantidad} ${prod.nombre}`)
    .join("\n");

  alert(
    `Vas a comprar: \n${listaVendidos} \n\nEl total a pagar es de $ ${precioTotal}.\n\n¡Muchas Gracias por confiar en nosotros!`
  );
  }

  alert("Gracias por visitarnos\nEn goPet estamos para lo que necesite tu mejor amigos\n\nEperamos volver a verte pronto.");
}

cargandoProductos();

console.log(precioTotal);
productos
  .filter((prod) => prod.cantidad > 0)
  .map((prod) => `Se vendieron ${prod.cantidad} ${prod.nombre}`)
  .forEach((resultadoVentaProd) => console.log(resultadoVentaProd));
