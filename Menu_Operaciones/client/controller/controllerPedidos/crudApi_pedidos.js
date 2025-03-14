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
            <td>
                <button id="del-row" class="del-boton-tabla">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="#000000" 
                        class="bi bi-trash3" 
                        viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                </button>
            </td>
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