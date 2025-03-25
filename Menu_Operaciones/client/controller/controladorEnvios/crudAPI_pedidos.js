import { apiClient } from "../API_REST.js";

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

export function mostrarClientes(clientes) {
    const tbody = document.getElementById("tabla-agendados");

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
            <td>${cliente.nameCliente}</td>
            <td>${formatFecha(cliente.fechaEntrega)}</td>
            <td>${formatFecha(cliente.fechaCreacion)}</td>
            <td>${cliente.direccion}</td>
            <td>${cliente.telefono}</td>
            <td>boton</td>
            <td>${cliente.totalPagar}</td>
            <td>Acciones</td>`;

        tbody.appendChild(fila); // 
    });
}
