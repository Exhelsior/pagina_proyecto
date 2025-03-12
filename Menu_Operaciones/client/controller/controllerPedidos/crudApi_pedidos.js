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

export function addItem (e) {
    const target = e.target;
    if (target.closest(".checkItem")) {
        const row = target.closest("tr");
        const index = row.dataset.index;

        const producto = [...row.children].slice(0, 2);
        const inputCant =  row.children[3].querySelector("input").value;


        const dataRowItem = producto.map(td => td.innerHTML);
        dataRowItem.push(inputCant);
        const cantUnitTxt = [...row.children].slice(1, 2);
        // const cantUnitClean = cantUnitTxt.replace("$", "");
        // const cantUnit = parseInt(cantUnitClean);
        console.log(cantUnitTxt);    

        if (target.checked) {
            if (!inputCant) {
                alert("Ingrese una cantidad");
                target.checked = false
                return; 
            }
            const cant = [...row.children].slice(2, 3);
/*             console.log(parseInt(cant[0].innerHTML));
            console.log(typeof(parseInt(inputCant))); */
            if (inputCant > parseInt(cant[0].innerHTML)) {
                alert("La cantidad ingresada es mayor a la cantidad disponible");
                target.checked = false
                return;
            }

            const totalItem = parseInt(inputCant) * parseInt(dataRowItem[1]);
            // console.log("Total Item", totalItem);
            itemArray.push( {index, dataRowItem, totalItem } ); 
        } else {
            const itemIndex = itemArray.findIndex(item => item.index === index);
            if (itemIndex !== -1) {
                itemArray.splice(itemIndex, 1); 
                console.log("Elemento eliminado");
            }
            console.log("Elementos actualizados", itemArray);
        }
    };
};



