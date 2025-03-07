import { generateDataRows } from "../API_REST.js";

export function showProductsBill(productos) {
    const tbody = document.querySelector(".tb-bill tbody");

    if (!tbody) {
        console.error("No se encontró la tabla de pedido");
        return;
    }

    tbody.innerHTML = productos.length === 0 ? '<td>Productos no encontrados</td>' : generateDataRows(productos, "pedido");
}
