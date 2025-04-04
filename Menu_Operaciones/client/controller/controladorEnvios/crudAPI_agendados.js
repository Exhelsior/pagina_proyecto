import { apiClient } from "../API_REST.js";
import { closeModal, modalContent, openModal, outsideClose, setupModalClose } from "../contenido-modal.js";
import { enviarData, pathEnvio } from "./crudAPI_envios.js";

const path = "pedido";

export async function clientes() {
    try {
        const data = await apiClient.getAllClientes(path);
        if (!data) throw new Error("Error al obtener los clientes");

        const tbody = document.getElementById("body-agenda");
        if (!tbody) {
            console.error("No se encontró el elemento tbody");
            return;
        }

        tbody.innerHTML = "";

        if (data.length === 0) {
            const fila = document.createElement("tr");
            const celda = document.createElement("td");
            celda.colSpan = 5;
            celda.textContent = "No hay pedidos registrados.";
            fila.appendChild(celda);
            tbody.appendChild(fila);
            return;
        }

        data.forEach(cliente => {
            const fila = document.createElement("tr");

            const formatFecha = (fecha) =>
                new Date(fecha).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                });

            const idPedidoTd = document.createElement("td");
            idPedidoTd.style.display = "none";
            idPedidoTd.textContent = cliente.idPedido;

            const nameTd = document.createElement("td");
            nameTd.textContent = cliente.nameCliente;

            const fechaEntregaTd = document.createElement("td");
            fechaEntregaTd.textContent = formatFecha(cliente.fechaEntrega);

            const fechaCreacionTd = document.createElement("td");
            fechaCreacionTd.textContent = formatFecha(cliente.fechaCreacion);

            const direccionTd = document.createElement("td");
            direccionTd.textContent = cliente.direccion;

            const telefonoTd = document.createElement("td");
            telefonoTd.textContent = cliente.telefono;

            const totalPagarTd = document.createElement("td");
            totalPagarTd.textContent = `$${cliente.totalPagar}`;

            const listTd = document.createElement("td");
            const btnList = document.createElement("button");
            btnList.id = "list-productos";
            btnList.classList.add("btns-envio");
            btnList.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/>
                    <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
                    <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/>
                </svg>
            `;
            listTd.appendChild(btnList);

            const estadoTd = document.createElement("td");
            const selectEstado = document.createElement("select");
            selectEstado.classList.add("estado");
            selectEstado.name = "estado";
            selectEstado.required = true;
            ["enviado", "cancelado", "entregado"].forEach(opcion => {
                const option = document.createElement("option");
                option.value = opcion;
                option.textContent = opcion.charAt(0).toUpperCase() + opcion.slice(1);
                selectEstado.appendChild(option);
            });
            estadoTd.appendChild(selectEstado);

            const accionesTd = document.createElement("td");
            const divBotones = document.createElement("div");
            divBotones.classList.add("b-caja");

            const btnEnviar = document.createElement("button");
            btnEnviar.id = "enviar-pedido";
            btnEnviar.classList.add("btns-envio");
            btnEnviar.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>`;

            const btnEliminar = document.createElement("button");
            btnEliminar.id = "eliminar-pedido";
            btnEliminar.classList.add("btns-envio");
            btnEliminar.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>`;

            divBotones.appendChild(btnEnviar);
            divBotones.appendChild(btnEliminar);
            accionesTd.appendChild(divBotones);

            fila.appendChild(idPedidoTd);
            fila.appendChild(nameTd);
            fila.appendChild(fechaEntregaTd);
            fila.appendChild(fechaCreacionTd);
            fila.appendChild(direccionTd);
            fila.appendChild(telefonoTd);
            fila.appendChild(totalPagarTd);
            fila.appendChild(listTd);
            fila.appendChild(estadoTd);
            fila.appendChild(accionesTd);

            tbody.appendChild(fila);
        });

        tbody.addEventListener("click", (e) => {
            const row = e.target.closest("tr");
            const idPedido = row?.children[0]?.textContent?.trim();
            const list = e.target.closest("#list-productos");
            const enviar = e.target.closest("#enviar-pedido");
            const eliminar = e.target.closest("#eliminar-pedido");

            if (list) {
                openModal(modalContent.listProductEnvios);
                idItemsClients(idPedido, path);
                setupModalClose();
                outsideClose();
            }

            if (eliminar) {
                openModal(modalContent.aceptDeletePedido);
                const confirmDelete = document.getElementById("delete-pedido-modal");
                confirmDelete.addEventListener("click", () => {
                    idDeletePedido(idPedido, path);
                    row.remove();
                    closeModal();
                });
                setupModalClose();
                outsideClose();
            }

            if (enviar) {
                const fechaEnvio = new Date().toISOString().split("T")[0];
                const estado = row.querySelector(".estado").value;
                const data = { fechaEnvio, estado };
                enviarData(data, pathEnvio, idPedido);
            }
        });

    } catch (error) {
        console.error("Error:", error.message);
    }
}


export async function idItemsClients(idPedido, path){
    try {
        const data = await apiClient.getItemsId(idPedido, path);
        if (!data) throw new Error("Productos no encontrados");

        console.log(`productos del id ${idPedido}:`, data);

        const tbody = document.getElementById("body-productos-envios")

        if (!tbody) {
            console.log("Tabla no encontrada")
        }

        tbody.innerHTML = ""; 

        data.forEach((producto) => {
            const fila = document.createElement("tr");

            const idProducto = document.createElement("td");
            idProducto.textContent = producto.idProducto;
            idProducto.style.display = "none";

            const nombreProducto = document.createElement("td");
            nombreProducto.textContent = producto.NombreProducto;

            const cantidadProducto = document.createElement("td");
            cantidadProducto.textContent = producto.cantidad;

            const totalProducto = document.createElement("td");
            totalProducto.textContent = producto.total;

            const fragment = document.createDocumentFragment();
            fragment.append(idProducto, nombreProducto, cantidadProducto, totalProducto);
            fila.appendChild(fragment);

            tbody.appendChild(fila)

        })
    } catch (error) {
        console.error("Error:", error.message);
    }
};

async function idDeletePedido(idPedido, path) {
    console.log(`Intentando eliminar pedido con ID: ${idPedido}`);
    try {
       const response = await apiClient.deletePedidoId(idPedido, path);
       if (!response) throw new Error("Error al eliminar Pedido");

    } catch (error) {
        console.error("Error:", error.message);
        alert(`Error al eliminar el pedido: ${error.message}`);
    }
}

