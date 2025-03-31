import { apiClient } from "../API_REST.js";
import { modalContent, openModal, outsideClose, setupModalClose } from "../contenido-modal.js";

const path = "pedido";

export async function clientes() {
    try {
        const data = await apiClient.getAllClientes(path);
        if (!data) throw new Error("Error al obtener los clientes");

        console.log(data);

        mostrarClientes(data);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

export async function mostrarClientes(clientes) {
    const path2 = "/items/"
    const tbody = document.getElementById("body-agendados");

    if (!tbody) {
        console.error("No se encontró el elemento tbody");
        return;
    }

    tbody.innerHTML = "";

    if (clientes.length === 0) {
        tbody.innerHTML = "<tr><td colspan='7'>No hay productos disponibles</td></tr>";
        return;
    }

    // ✅ Corrección: usar forEach() y agregar la fila al tbody
    clientes.forEach(cliente => {
        const fila = document.createElement("tr");

        function formatFecha(fecha) {
            return new Date(fecha).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });
        }

        fila.innerHTML = `
            <td style="display: none;">${cliente.idPedido}</td>
            <td>${cliente.nameCliente}</td>
            <td>${formatFecha(cliente.fechaEntrega)}</td>
            <td>${formatFecha(cliente.fechaCreacion)}</td>
            <td>${cliente.direccion}</td>
            <td>${cliente.telefono}</td>
            <td>$${cliente.totalPagar}</td>
            <td>
                <button id="list-productos" class="btns-envio">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/>
                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
                        <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/>
                    </svg>
                </button>
            </td>
            <td>
                <div class="b-caja">
                <button id="enviar-pedido" class="btns-envio">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                    </svg>
                </button>
                <button id="eliminar-pedido" class="btns-envio">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                </button>
                </div>
            </td>`;

        tbody.appendChild(fila); // 
    });

    const btnList = document.getElementById("list-productos");
    console.log(btnList);


    document.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "list-productos":
                const target = e.target;
                const row = target.closest("tr");
                const idPedido = row.children[0].innerHTML;
                console.log(idPedido);
                openModal(modalContent.listProductEnvios);
                setupModalClose();
                outsideClose();
            break;
            default:
            break;
    }
    })
}

