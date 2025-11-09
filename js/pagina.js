const btnCarrito = document.getElementById("btnCarrito");
const carrito = document.getElementById("carrito");
const listaCarrito = document.getElementById("listaCarrito");
const total = document.getElementById("total");
const contador = document.getElementById("contador");
const btnVaciar = document.getElementById("vaciar");
const btnCerrar = document.getElementById("cerrar");

let carritoItems = [];

function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let totalCompra = 0;

  carritoItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    listaCarrito.appendChild(li);
    totalCompra += item.precio;
  });

  total.textContent = totalCompra;
  contador.textContent = carritoItems.length;
}

document.querySelectorAll(".agregar").forEach((boton, index) => {
  boton.addEventListener("click", () => {
    const producto = boton.parentElement;
    const nombre = producto.querySelector("h3").textContent;
    const precio = parseInt(producto.querySelector("p").textContent.replace("$", ""));
    
    carritoItems.push({ nombre, precio });
    actualizarCarrito();
    alert(`${nombre} agregado al carrito!`);
  });
});

btnCarrito.addEventListener("click", () => {
  carrito.style.display = "block";
});

btnCerrar.addEventListener("click", () => {
  carrito.style.display = "none";
});

btnVaciar.addEventListener("click", () => {
  carritoItems = [];
  actualizarCarrito();
});