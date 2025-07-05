
const carrito = [];
function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
}
function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item + " ";
    const btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.onclick = () => {
      carrito.splice(index, 1);
      actualizarCarrito();
    };
    li.appendChild(btn);
    lista.appendChild(li);
  });
  const mensaje = "Hola, quiero comprar: " + carrito.join(", ");
  document.getElementById("enviar-pedido").href =
    "https://wa.me/541136208000?text=" + encodeURIComponent(mensaje);
}
