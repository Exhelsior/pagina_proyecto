import { resaltarBotones } from "../view/js/botonesMenu.js";
import { setupModalListeners, openModal, setupModalClose, outsideClose } from "./contenido-modal.js";
import { addProduct, deleteProduct, getRowData, products, tSearch, updateForm } from "./controladorInventario/crudAPI_invetario.js"; // Asegúrate de que la ruta sea correcta

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

    document.getElementById("search-product").addEventListener("keyup", tSearch)

    document.querySelector(".t-productos .t-body").addEventListener("click", (event) => {
      const target = event.target;
      const btnEdit = target.closest(".add-boton-tabla");
      const btnDelete = target.closest(".del-boton-tabla");

      if (btnDelete) {
        deleteProduct(event); // Llamar a la función deleteProduct para eliminar un producto
      }
      
      if (btnEdit) {
        const rowData = getRowData(event);
        if (rowData) {
          updateForm(rowData); // Llamar a la función updateForm para mostrar el formulario de edición
        } 
      }
    });

    setupModalListeners(openModal);

    document.addEventListener('click', (event) => {
      if (event.target.id === 'btn-form-product') {
        addProduct(); // Llamar a la función addProduct para agregar un producto
      } 
    });

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