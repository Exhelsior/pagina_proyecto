import { closeModal, openModal } from "../view/js/contenido-modal.js";
import { listenerButton } from "./buttons.js";

document.addEventListener("DOMContentLoaded", () => {
  let vista = new Vista();
  const modal = document.getElementById("modal");

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
    listenerButton(openModal);
    closeModal();

  }


  function mostrarPedidos() {
    vista.mostrarPlantilla("tempPedidos", "main-contenido");
  }

  function mostrarEnvios() {
    vista.mostrarPlantilla("tempEnvios", "main-contenido");
  }

});

