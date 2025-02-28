import { resaltarBotones } from "../view/js/botonesMenu.js";
import { setupModalListeners, openModal, setupModalClose, outsideClose } from "./contenido-modal.js";
import { addProduct, products } from "./controladorInventario/crudAPI.js"; // Asegúrate de que la ruta sea correcta

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
    products(); // Llamar a la función products para cargar los productos
    setupModalListeners(openModal);
    
    document.addEventListener('click', (event) => {
      if (event.target.id === 'btn-form-product') {
        addProduct(); // Llamar a la función addProduct para agregar un producto
      } 
    })
    setupModalClose();
    outsideClose();
  }

  function mostrarPedidos() {
    vista.mostrarPlantilla("tempPedidos", "main-contenido");
    setupModalListeners(openModal);
    setupModalClose();
    outsideClose();
  }

  function mostrarEnvios() {
    vista.mostrarPlantilla("tempEnvios", "main-contenido");
  }
});
