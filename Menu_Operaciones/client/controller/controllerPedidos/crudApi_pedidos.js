import { generateDataRows } from "../API_REST.js";

export function showProductsBill(productos, type) {
    const tbody = document.querySelector(".tb-bill tbody");

    if (!tbody) {
        console.error("No se encontró la tabla de pedidos");
        return;
    }

    tbody.innerHTML = productos.length === 0 
        ? '<td>Productos no encontrados</td>' 
        : generateDataRows(productos, type);

}

export function addItem (e) {
    const target = e.target;
    if (target.closest(".checkItem")) {
        const row = target.closest("tr");
        const index = row.dataset.index;

        const producto = [...row.children].slice(0, 2);
        const inputCant =  row.children[3].querySelector("input").value;

        const dataRowItem = producto.map(td => td.innerHTML);
        dataRowItem.push(inputCant);

        console.log(dataRowItem);
        return { index, dataRowItem };
    }
};



