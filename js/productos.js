

//funcion constructora de productos
class Producto {
  constructor(nombre, precio, img, tipo) {
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.tipo = tipo;
    this.cantidad = 0;
  }

  vender(cantidad) {
    precioTotal = suma(precioTotal, cantidad * this.precio);
    this.cantidad = this.cantidad + cantidad;
  }
}


//Productos
const productos = [
  new Producto("Royal Canin gato - Strelized x 7kg", 3539.99,"../images/royal-canin-sterilized.jpg", "gato" ),
  new Producto("ProPlan gato - Adulto x7kg", 3249.99,"../images/pro-plan-adulto.jpeg", "gato" ),
  new Producto("Royal Canin perro - Adulto x 10kg", 3500,"../images/royal-canin-medium.jpg", "perro" ),
  new Producto("ProPlan perro - Adulto x10kg", 3200,"../images/pro-plan-adulto.jpeg", "perro" ),
  new Producto("Royal Canin gato - Kitten x 7kg", 3249.99,"../images/royal-canin-kitten.jpg", "gato" ),
  new Producto("ProPlan gato - Kitten x7kg", 3149.99,"../images/pro-plan-kitten-gato.webp", "gato" ),
  new Producto("Royal Canin - Alimento humedo - control 90gr", 245,"../images/royal-canin-control.jpg", "gato" ),
  new Producto("Royal Canin - Alimento humedo - maxi 90gr", 245,"../images/royal-canin-humedo-perro-maxi.webp", "perro" ),
  new Producto("Royal Canin - Alimento humedo - adult 90gr", 245,"../images/adult-alimento-humedo.webp", "gato" ),
  new Producto("Royal Canin - Alimento humedo - medium 90gr", 245,"../images/royal-canin-humedo-perro-medium.webp", "perro" ),
  new Producto("ProPlan - Alimento humedo - sterilized 90gr", 215,"../images/pro-plan-sterilized.jpg", "gato" ),
  new Producto("ProPlan - Alimento humedo - agile 90gr", 215,"../images/pro-plan-agilidad.jpeg", "perro" ),
  new Producto("ProPlan - Alimento humedo - adult 90gr", 215,"../images/pro-plan-adulto.png", "gato" ),
  new Producto("ProPlan - Alimento humedo - adult 90gr", 215,"../images/pro-plan-adulto.jpeg", "perro" ),
  new Producto("ProPlan - Alimento humedo - kitten 90gr", 215,"../images/kitten-alimento-humedo.webp", "gato" ),
];

/* console.log(productos[]); */

//Creación del carrito y la funcion que agrega al carrito.
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const guardarCarrito = (producto, cant) => {
  carrito.push({ producto: producto, cantidad: cant });
};



//Function que crea el div de cada producto
function createPlato(producto) {
  //Creación del div del producto
  const plato = document.createElement("div");

  //Imagen del producto, que se agrega al div plato.
  const image = document.createElement("img");
  image.src = producto.img;
  image.className = "plato";
  plato.append(image);

  //Nombre del producto, que se agrega al div plato.
  const paragraph = document.createElement("p");
  paragraph.innerText = producto.nombre;
  plato.append(paragraph);

  //Boton de comprar, que se agrega al div plato.
  const button = document.createElement("button");
  button.className = "btn btn-primary";
  button.id = "btnComprar"
  button.innerText = "Comprar";
  plato.append(button);
  

  //Input de cantidad, que se agrega al div plato.
  const input = document.createElement("input");
  input.type = "number";
  input.className = "campoCantidad";
  input.value = "1";
  plato.append(input);

  //Event Listener de que cuando compras se guarde en el localStorage carrito el producto y la cantidad indicada en el input.
  button.addEventListener("click", (e) => {
    guardarCarrito(producto, parseInt(input.value));
    localStorage.setItem("carrito", JSON.stringify(carrito));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto agregado al carrito!',
      showConfirmButton: false,
      timer: 1000
    })
  });

  //La function me devuelve el div del plato creado
  return plato;

}

//Creación de las secciones segun "tipo" y los productos en el html.
let contenedorVegie = document.getElementById("alimento-gato");
let contenedorCarne = document.getElementById("alimento-perro");

for (const prod of productos) {
  const prods = createPlato(prod);

  if (prod.tipo === "gato") {
    contenedorVegie.append(prods);
  } else {
    contenedorCarne.append(prods);
  }
  prods.className = "platos";
}

