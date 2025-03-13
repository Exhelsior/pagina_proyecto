import { generateDataRows } from "../API_REST.js";

export const itemArray = [];

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
export function addItem(e) {
    const target = e.target;
    if (target.closest(".checkItem")) {
        const row = target.closest("tr");
        const index = row.dataset.index;
        const name = row.children[0].innerHTML;
        const price = row.children[1].innerHTML;
        const cant = row.children[2].innerHTML;
        const priceClean = price.replace("$", "");
        const priceInt = parseInt(priceClean);
        const inputCant = parseInt(row.children[3].querySelector("input").value);
        const totalPrice = priceInt * inputCant;

        if (target.checked){
            if (!inputCant) {
                alert("Ingrese una cantidad");
                target.checked = false;
                return;
            }

            if (inputCant > parseInt(cant)) {
                alert("La cantidad ingresada es mayor a la cantidad disponible");
                target.checked = false;
                return
            }

            itemArray.push({index, name, inputCant, totalPrice});
        } else {
            const itemIndex = itemArray.findIndex(item => item.index === index);
            if (itemIndex !== -1) {
                itemArray.splice(itemIndex, 1);
                console.log("Elemento eliminado");
            }
        }
/*         console.log("Elementos actualizados",itemArray); */
    };
};

export function mergeTable (itemArray) {
    const tbody = document.querySelector(".tabla-pedido tbody");
    tbody.innerHTML = "";

    itemArray.forEach((item, index) => {
        const tr = `
        <tr data-index="${index}">
            <td>${item.name}</td>
            <td>$${item.totalPrice}</td>
            <td>${item.inputCant}</td>
            <td><button id="del-row" class="del-boton-tabla">Del</button></td>
        </tr>
        `;
        tbody.innerHTML += tr;
    });


}

export function deleteRow(e) {
    const target = e.target;
    if (target.closest("#del-row")) {
        const row = target.closest("tr");
        const index = row.dataset.index;
        itemArray.splice(index, 1);
        mergeTable(itemArray);
    }
}