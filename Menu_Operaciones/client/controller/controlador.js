import { resaltarBotones } from "../view/js/botonesMenu.js";
import { setupModalClose, openModal, outsideClose } from "../view/js/contenido-modal.js";
import { listenerButton, listenerBillButton } from "./buttons.js";
import { eliminarProducto, products } from "./consultasInventarios.js"; 

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
    // Esperar a que la plantilla cargue y luego ejecutar products()
    setTimeout(() => {
      const tablaBody = document.querySelector(".t-productos .t-body");
      if (tablaBody) {
        products(); // Llama a la función para cargar los productos
        tablaBody.addEventListener("click", eliminarProducto);

      } else {
        console.error("No se encontró .t-productos .t-body");
      };
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
