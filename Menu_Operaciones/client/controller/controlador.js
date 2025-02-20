import { setupModalClose, openModal, outsideClose } from "../view/js/contenido-modal.js"; 
import { listenerButton, listenerBillButton } from "./buttons.js";
import { eliminarProducto, products } from "./consultasInventarios.js"; // Importar la función que carga los productos

document.addEventListener("DOMContentLoaded", () => {
  let vista = new Vista();

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
          window.location.href = 'index.html';
      }
    });
  };

  function mostrarInventario() {
    vista.mostrarPlantilla("tempInventario", "main-contenido");

    // Esperar a que la plantilla se cargue antes de ejecutar `products()`
    setTimeout(() => {
      products(); // Llamar a la función que carga los productos después de insertar la plantilla
      document.querySelector(".t-productos .t-body").addEventListener("click", eliminarProducto);
    }, 100);
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