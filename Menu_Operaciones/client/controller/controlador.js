let vista = new Vista();
let modal = document.getElementById("modal-producto")
const mainContenido = document.getElementById("main-contenido");

window.onload = () => {
  document
    .getElementById("pag-inventarios")
    .addEventListener("click", mostrarInventario);
  document
    .getElementById("pag-pedidos")
    .addEventListener("click", mostrarPedidos);
    document
    .getElementById("pag-envios")
    .addEventListener("click", mostrarEnvios);

    document.addEventListener("click", function(event) {
      if (event.target && event.target.id == 'salir') {
          // Redirigir al menú principal
          window.location.href = 'index.html';
      }
  });
};



function mostrarInventario() {
  vista.mostrarPlantilla("tempInventario", "main-contenido");
}

function mostrarPedidos() {
  vista.mostrarPlantilla("tempPedidos", "main-contenido");
}

function mostrarEnvios() {
  vista.mostrarPlantilla("tempEnvios", "main-contenido");
}

// funciones de los modales

