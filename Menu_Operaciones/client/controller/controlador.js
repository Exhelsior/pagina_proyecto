import { resaltarBotones } from "../view/js/botonesMenu.js";
import { setupModalListeners, openModal, setupModalClose, outsideClose, modalContent, closeModal } from "./contenido-modal.js";
import { clientes } from "./controladorEnvios/crudAPI_pedidos.js";
import { mostrarTemplate } from "./controladorEnvios/templateEnvios.js";
import { addProduct, deleteProduct, getRowData, products, showProducts, tSearch, updateForm} from "./controladorInventario/crudAPI_invetario.js"; // Asegúrate de que la ruta sea correcta
import { addItem, createPedido, deleteRow, itemArray, mergeTable, /* drawTable, */ showProductsBill, showTotal } from "./controllerPedidos/crudApi_pedidos.js";

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
    products(showProducts, "productos"); // Llamar a la función products para cargar los productos

    document.getElementById("search-product").addEventListener("keyup", tSearch)

    document.querySelector(".t-productos .t-body").addEventListener("click", (event) => {
      const target = event.target;
      const btnDelete = target.closest(".del-boton-tabla");

      if (btnDelete) {
        deleteProduct(event); // Llamar a la función deleteProduct para eliminar un producto
      }
      
      if (target.closest("#btn-edit")) {
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
    document.addEventListener('click', (e) => {
      if (e.target.id === 'bill-add-product') {
        openModal(modalContent.addBillProduct);

        products(showProductsBill, "pedido");
        document.querySelector(".tb-bill tbody").addEventListener('click', (e) => {
          addItem(e);
          mergeTable(itemArray);
        });

        const aggProductBill = document.getElementById("add-product-bill");
        aggProductBill.addEventListener('click', (e) => {
          closeModal();
          showTotal();
          /*             console.log("Elementos agregados", itemArray); */
        });
      }
      
      if (e.target.id === 'send-bill') {
        createPedido();
      }
    });


      if (event.target.id === 'del-row') {
/*         console.log("Elemento eliminado"); */
        deleteRow(e);
        mergeTable(itemArray);
        showTotal();
      }


    setupModalClose();
    outsideClose();
  }

  function mostrarEnvios() {
    vista.mostrarPlantilla("tempEnvios", "main-contenido");
    mostrarTemplate();
    clientes();
  }
});