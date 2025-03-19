import { apiClient, generateDataRows } from "../API_REST.js";

const path = "pedido";
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

};

export function addItem(e) {
    const target = e.target;
    if (target.closest(".checkItem")) {
        const row = target.closest("tr");
        const index = row.dataset.index;
        const idProducto = row.children[0].innerHTML;
        const name = row.children[1].innerHTML;
        const price = row.children[2].innerHTML;
        const cant = row.children[3].innerHTML;
        const priceClean = price.replace("$", "");
        const priceInt = parseInt(priceClean);
        const inputCant = parseInt(row.children[4].querySelector("input").value);
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

            itemArray.push({index, idProducto, name, inputCant, totalPrice});
        } else {
            const itemIndex = itemArray.findIndex(item => item.index === index);
            if (itemIndex !== -1) {
                itemArray.splice(itemIndex, 1);
                console.log("Elemento eliminado");
            }
        }
        console.log("Elementos actualizados",itemArray);
    };
};

export function mergeTable (itemArray) {
    const tbody = document.querySelector(".tabla-pedido tbody");
    tbody.innerHTML = "";

    itemArray.forEach((item, index) => {
        const tr = `
        <tr data-index="${index}">
            <td style="display: none;">${item.idProducto}</td>
            <td>${item.name}</td>
            <td class="precio">$${item.totalPrice}</td>
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


};

export function deleteRow(e) {
    const target = e.target;
    if (target.closest("#del-row")) {
        const row = target.closest("tr");
        const index = row.dataset.index;
        itemArray.splice(index, 1);
        mergeTable(itemArray);
    }
};

export function showTotal() {
    let total = 0;
    document.querySelectorAll(".precio").forEach((precio) => {
         total+= parseInt(precio.innerHTML.replace("$", ""));
    })

    let totalPagar = document.getElementById("total-pagar");
    totalPagar.value = `${total}`;
/*     console.log(totalPagar);

    console.log("Total", total); */
};

export const createPedido = async () => {
    const nameCliente = document.getElementById("nombre-cliente").value.trim();
    const fechaCreacion = new Date().toISOString().slice(0, 10); // Se mantiene como tipo Date
    const fechaEntrega = document.getElementById("fecha-entrega").value.trim();
    const direccion = document.getElementById("direccion-cliente").value.trim();
    const telefono = document.getElementById("telefono-cliente").value;
    const totalPagar = document.getElementById("total-pagar").value;

    if (!nameCliente || !fechaEntrega || !direccion || !telefono) {
        alert("Por favor ingrese todos los campos");
        return;
    }

    if (itemArray.length === 0) {
        alert("Por favor agregue productos al pedido");
        return;
    }

    const pedido = {
        nameCliente,
        fechaEntrega, 
        fechaCreacion,
        direccion,
        telefono,
        totalPagar,
        items: itemArray.map(item => ({
            idProducto: item.idProducto,
            cantidad: item.inputCant,
            total: item.totalPrice
        }))
    };

    try {
        const response = await apiClient.createPedido(pedido, path);
        console.log(response);

        if (!response) {
            throw new Error("Error al crear el pedido");
        }

        alert("Pedido creado exitosamente");
        console.log("Pedido creado:", response);

        itemArray.length = 0;
        mergeTable(itemArray);
        showTotal();

        document.getElementById("nombre-cliente").value = "";
        document.getElementById("fecha-entrega").value = "";
        document.getElementById("direccion-cliente").value = "";
        document.getElementById("telefono-cliente").value = "";
        document.getElementById("total-pagar").value = "";

        console.log(itemArray);
        
    } catch (error) {
        console.error(error.message);
        alert(`Error al crear el pedido: ${error.message}`)
    }
}

