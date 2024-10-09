// const pagProductos = document.getElementById('pag-productos');
// const pagFacturacion = document.getElementById('pag-facturacion');
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
};

function mostrarInventario() {
  vista.mostrarPlantilla("tempInventario", "main-contenido");
}

function mostrarInsumos() {
  vista.mostrarPlantilla("tempProducto", "main-contenido");
}
