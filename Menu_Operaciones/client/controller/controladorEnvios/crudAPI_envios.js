import { apiClient } from "../API_REST.js"
import { closeModal, modalContent, openModal, outsideClose, setupModalClose } from "../contenido-modal.js";

export const pathEnvio = "envio"

export async function getEnvios() {
    try {
        const tbody = document.getElementById("body-envios")
        const data = await apiClient.getEnvios(pathEnvio);
        if (!data) throw new Error("Error al obtener los envios");

        const envios = data;

        tbody.innerHTML = "";

        if (envios.length === 0) {
            const fila = document.createElement("tr");
            const celda = document.createElement("td");
            celda.colSpan = 5;
            celda.textContent = "No hay envíos registrados.";


            fila.appendChild(celda);
            tbody.appendChild(fila);
            return; 
        }


        envios.forEach(envio => {
            const fila = document.createElement("tr");

            function formatFecha(fecha) {
                return new Date(fecha).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                });
            }

            // Crear y agregar cada celda manualmente
            const idEnvioTd = document.createElement("td");
            idEnvioTd.textContent = envio.IdEnvio;

            const clienteTd = document.createElement("td");
            clienteTd.textContent = envio.nameCliente;

            const fechaEnvioTd = document.createElement("td");
            fechaEnvioTd.textContent = formatFecha(envio.fechaEnvio);

            const estadoTd = document.createElement("td");
            estadoTd.textContent = envio.estado;

            const accionesTd = document.createElement("td");
            const btnEliminar = document.createElement("button");
            btnEliminar.id = "eliminar-envio";
            btnEliminar.classList.add("btns-envio");
            btnEliminar.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>`;

            // Agregar botones al div
            accionesTd.appendChild(btnEliminar);

            // Agregar todas las celdas a la fila
            fila.appendChild(idEnvioTd);
            fila.appendChild(clienteTd);
            fila.appendChild(fechaEnvioTd);
            fila.appendChild(estadoTd);
            fila.appendChild(accionesTd);

            tbody.appendChild(fila);

        });

        /* console.log(data); */

        tbody.addEventListener("click", (e) => {
            const eliminar = e.target.closest("#eliminar-envio");
            const row = e.target.closest("tr");
            const idEnvio = row.children[0].textContent.trim();
            if (eliminar) {
                console.log(idEnvio);
                openModal(modalContent.aceptDeleteEnvio);
                    const confirmDelete = document.getElementById("delete-envio-modal");
                    confirmDelete.addEventListener("click", () => {
                        idDeleteEnvio(idEnvio, pathEnvio);
                        row.remove();
                        closeModal();                       
                    })                
                setupModalClose();
                outsideClose();
            }
        });
    } catch (error) {
        console.error("Error:", error.message);
    }
}

export async function enviarData(data, path, id) {
    try {
        const response = await apiClient.createEnvio(data, path, id);
        if (!response) throw new Error("Error al crear el envío");

        const mensaje = response.accion === "creado" 
            ? "Envío creado exitosamente" 
            : "Estado de envío actualizado exitosamente";

        alert(mensaje);
        
    } catch (error) {
        console.error(error.message);
        alert(`Error al procesar el envío: ${error.message}`);
    }
}

async function idDeleteEnvio(idEnvio, path) {
    try {
        const response = await apiClient.deleteEnvioId(idEnvio, path);
        if(!response) throw new Error("Error al eliminar el envío");

    } catch (error) {
        console.error("Error:", error.message);
        alert(`Error al eliminar el envio: ${error.message}`);
    }
}



