import { setupModalClose, openModal, outsideClose } from "../view/js/contenido-modal.js";
import { listenerButton, listenerBillButton } from "./buttons.js";
import { products } from "./consultas.js";

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

    // Esperar a que se cargue la plantilla se cargue antes de ejecutar el "products"
    setTimeout(() => {
      products();
    })
    listenerButton(openModal);
    setupModalClose();
    outsideClose();
  }


  function mostrarPedidos() {
    vista.mostrarPlantilla("tempPedidos", "main-contenido");
    listenerBillButton(openModal);
    setupModalClose();
    outsideClose();
  }

  function mostrarEnvios() {
    vista.mostrarPlantilla("tempEnvios", "main-contenido");
  }

});

