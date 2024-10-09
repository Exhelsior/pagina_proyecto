// const pagPedidos = document.getElementById('pag-pedidoss');
let vista = new Vista();
const mainContenido = document.getElementById("main-contenido");

window.onload = () => {
  document
    .getElementById("pag-inventarios")
    .addEventListener("click", mostrarInventario);
  document
    .getElementById("pag-insumo")
    .addEventListener("click", mostrarInsumos);
  document
    .getElementById("pag-productos")
    .addEventListener("click", mostrarProductos);
  document
    .getElementById("pag-facturacion")
    .addEventListener("click", mostrarFacturacion);
};

function mostrarInventario() {
  vista.mostrarPlantilla("tempInventario", "main-contenido");
}

function mostrarInsumos() {
  vista.mostrarPlantilla("tempInsumo", "main-contenido");
}

function mostrarProductos() {
  vista.mostrarPlantilla("tempProducto", "main-contenido");
}

function mostrarFacturacion() {
  vista.mostrarPlantilla("tempFacturacion", "main-contenido");
}
