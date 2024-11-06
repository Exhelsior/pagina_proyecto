let vista = new Vista();
let modal = document.getElementById("modal-producto")
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
    
    // modals
    document
    .addEventListener("click", function(event) {
      if (event.target && event.target.id == 'add-modal') {
        mostrarModal();
      }
    })

    document
    .querySelector(".close")
    .addEventListener("click", function(){
      cerrarModal()
    })


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

function mostrarPedidos() {
  vista.mostrarPlantilla("tempPedidos", "main-contenido");
}

function mostrarEnvios() {
  vista.mostrarPlantilla("tempEnvios", "main-contenido");
}

// funciones de los modales

function mostrarModal() {
  modal.style.display = "flex";
}

function cerrarModal() {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
