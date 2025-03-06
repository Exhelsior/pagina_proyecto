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

  document.addEventListener('DOMContentLoaded', () => {
    // Obtener los botones
    const btnAddBill = document.getElementById('add-bill');
    const btnDelBill = document.getElementById('del-bill');
    const btnVerPedido = document.getElementById('ver-pedido-btn');
  
    // Función para obtener y mostrar los datos del pedido
    const obtenerPedido = async (pedidoId) => {
      try {
        // Aquí haces la llamada a la API para obtener los detalles del pedido
        const response = await fetch(`http://localhost:3000/pedidos/${pedidoId}`);
        
        if (!response.ok) {
          throw new Error('No se pudo obtener la información del pedido');
        }
  
        const pedido = await response.json();
        
        // Mostrar los detalles en el div de pedido-info
        const pedidoInfoDiv = document.getElementById('pedido-info');
        pedidoInfoDiv.innerHTML = `
          <h3>Detalles del Pedido</h3>
          <p>ID del pedido: ${pedido.id}</p>
          <p>Fecha: ${pedido.fecha}</p>
          <p>Estado: ${pedido.estado}</p>
          <p>Detalles del producto: ${pedido.producto}</p>
        `;
      } catch (error) {
        console.error('Error obteniendo el pedido:', error);
        alert('Hubo un error al obtener el pedido');
      }
    };
  
    // Agregar eventos de clic a los botones
    btnAddBill.addEventListener('click', () => {
      // Llamar la función para mostrar el pedido (puedes poner el ID que corresponda)
      obtenerPedido(1); // Ejemplo con un ID de pedido ficticio
    });
  
    btnDelBill.addEventListener('click', () => {
      // Eliminar el pedido o hacer algo similar
      console.log('Eliminar pedido');
      // Aquí puedes agregar la lógica de eliminar
    });
  
    btnVerPedido.addEventListener('click', () => {
      // Llamar a la función para mostrar un pedido específico
      obtenerPedido(1); // Cambia el ID según sea necesario
    });
  });
  
});
