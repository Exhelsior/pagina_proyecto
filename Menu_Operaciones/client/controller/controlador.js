import { resaltarBotones } from "../view/js/botonesMenu.js";
import { setupModalClose, openModal, outsideClose } from "../view/js/contenido-modal.js";
import { listenerButton, listenerBillButton } from "./buttons.js";
import { eliminarProducto, products, searchProducto } from "./consultasInventarios.js"; 

document.addEventListener("DOMContentLoaded", () => {
  let vista = new Vista();

  resaltarBotones(".boton");

  document.getElementById("pag-inventarios").addEventListener("click", mostrarInventario);
  document.getElementById("pag-pedidos").addEventListener("click", mostrarPedidos);
  document.getElementById("pag-envios").addEventListener("click", mostrarEnvios);

  document.addEventListener("click", (event) => {
    if (event.target.id === "salir") {
      window.location.href = "index.html";
    }
  });

  function mostrarInventario() {
    vista.mostrarPlantilla("tempInventario", "main-contenido");

    setTimeout(() => {
        const tablaBody = document.querySelector(".t-productos .t-body");
        const inputBusqueda = document.getElementById("search-product");

        if (tablaBody) {
            products(); // Cargar productos
            tablaBody.addEventListener("click", eliminarProducto);
        } else {
            console.error("No se encontró .t-productos .t-body");
        }

        // Agregar evento para ejecutar la búsqueda
        if (inputBusqueda) {
            inputBusqueda.addEventListener("input", searchProducto);
        } else {
            console.error("No se encontró el input de búsqueda");
        }
    });

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
