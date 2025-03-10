import { closeModal, modalContent, openModal } from "../contenido-modal.js";
import { apiClient, generateDataRows } from "../API_REST.js";

const path = "inventario";

export async function products(callback, type) {
    try {
        const data = await apiClient.getAllProductos("inventario");

        if (!Array.isArray(data) || data.length === 0) {
            console.warn("No se encontraron productos.");
            callback([], type); // Llama a la función pasada con una lista vacía
            return;
        }

        console.log("Productos obtenidos:", data);
        callback(data, type); // Llama a la función pasada con los datos obtenidos

    } catch (error) {
        console.error("Error al obtener productos:", error.message);
        callback([], type); // En caso de error, llama a la función con una lista vacía
    }
}


export function showProducts(productos, type) {
    const tbody = document.querySelector(".t-productos tbody");

    if (!tbody) {
        console.error("No se encontró la tabla de productos");
        return;
    }

    tbody.innerHTML = productos.length === 0 
        ? '<td>Productos no encontrados</td>' 
        : generateDataRows(productos, type);
}

export const addProduct = async () => {
    const NombreProducto = document.getElementById("name-product").value.trim(); 
    const Precio = document.getElementById("price-product").value.trim();
    const Cantidad = document.getElementById("cant-product").value.trim();
    const Lote = document.getElementById("fab-date-product").value;
    const FechaVencimiento = document.getElementById("venc-date-product").value;
    
    if (!NombreProducto || !Precio || !Cantidad || !Lote || !FechaVencimiento) {
        alert("Todos los campos son requeridos");
        return;
    };

    const precioNum = parseFloat(Precio);
    const cantidadNum = parseInt(Cantidad);

    if (isNaN(precioNum) || precioNum <= 0) {
        alert("El precio debe ser un numero mayor a  0");
        return;
    };

    if (isNaN(cantidadNum) || cantidadNum <= 0) {
        alert("La cantidad debe ser un numero mayor a 0");
        return;
    };

    const nuevoProducto = {
        NombreProducto,
        Precio: precioNum,
        Cantidad: cantidadNum,
        Lote,
        FechaVencimiento,
    };
    console.log(nuevoProducto);
    try {
        const response = await apiClient.createProducto(nuevoProducto, path);
        console.log(response);
        if (!response) {
            throw new Error(" Error al crear el producto");
        } 

        alert("Producto creado exitosamente");
        console.log("producto creado:", response);
        products(showProducts, "productos");

        closeModal()
        
    } catch (error) {
        console.error(error.message);
        alert(`Error al crear el producto: ${error.message}`);
    }
};

export const deleteProduct = async (e) => {

    const btnDelete = e.target.closest('.del-boton-tabla');
    if (!btnDelete) return;

    const row = btnDelete.closest('tr');
    const idProducto = row.querySelector('td').textContent;
    // console.log(idProducto);
    openModal(modalContent.aceptDelete);

    const modalConfirm = await new Promise((resolve) => {
        document.getElementById("delete-product").addEventListener("click", () => resolve(true), { once: true });
        document.getElementById("cancel-delete").addEventListener("click", () => resolve(false), { once: true });
    });

    if (!modalConfirm) {
        closeModal();
        return;
    }

    try {
        const response = await apiClient.deleteProducto(path, idProducto);
        if (!response) throw new Error("Error al eliminar el producto");

        row.remove();
        closeModal();
    }catch (error) {
        console.error("Error:", error.message);
        alert(`Error al eliminar el producto: ${error.message}`);
    }
}

export function getRowData(event) {
    const target = event.target
        if (target.closest(".add-boton-tabla")){

            const row = target.closest("tr");
            const index = row.dataset.index;
            const cell = [...row.children].slice(0,-1);

            const dataRow = cell.map(cell => cell.innerHTML);
            console.log(dataRow);
            return { index, dataRow };
        }
    }

export function updateForm( { dataRow } ) {
    openModal(modalContent.formEdit);
    const confirmUpdate = document.getElementById("btn-edit-product");
    const cancelUpdate = document.getElementById("cancel-update");

    document.querySelector('#producto-id').value = dataRow[0];
    document.querySelector('#name-product').value = dataRow[1];
    document.querySelector('#price-product').value = dataRow[4].replace("$", "");
    document.querySelector('#cant-product').value = dataRow[5];

    function convertirFecha(fecha) {
        if (fecha.includes("/")) { // Si la fecha está en formato DD/MM/YYYY
            const [dia, mes, año] = fecha.split("/");
            return `${año}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
        }
        return fecha; // Si ya está en formato correcto
    
}
    document.querySelector('#fab-date-product').value = convertirFecha(dataRow[2]);
    document.querySelector('#venc-date-product').value = convertirFecha(dataRow[3]);

    confirmUpdate.addEventListener("click", async () => {
        const idProducto = document.getElementById("producto-id").value;
        const NombreProducto = document.getElementById("name-product").value.trim(); 
        const Precio = document.getElementById("price-product").value.trim();
        const Cantidad = document.getElementById("cant-product").value.trim();
        const Lote = document.getElementById("fab-date-product").value;
        const FechaVencimiento = document.getElementById("venc-date-product").value;

        const precioNum = parseFloat(Precio);
        const cantidadNum = parseInt(Cantidad);

        
        if (isNaN(precioNum) || precioNum <= 0) {
            alert("El precio debe ser un numero mayor a  0");
            return;
        };

        if (isNaN(cantidadNum) || cantidadNum <= 0) {
            alert("La cantidad debe ser un numero mayor a 0");
            return;
        };

        const actualProducto = {
            NombreProducto,
            Precio: precioNum,
            Cantidad: cantidadNum,
            Lote,
            FechaVencimiento,
        };
        
        try {
            const response = await apiClient.updateProducto(path, idProducto, actualProducto);
            if (!response) throw new Error("Error al actualizar el producto");

            alert("Producto actualizado exitosamente");
            products();
            closeModal();
        } catch (error) {
            console.errror(error.message);
            alert(`Error al actualizar el producto: ${error.message}`);
        }
    })

    cancelUpdate.addEventListener("click", () => {
        closeModal();
    });
};

function highlightText(cell, searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    cell.innerHTML = cell.textContent.replace(regex, "<mark>$1</mark>");
};

export function tSearch () {
    const input = document.getElementById("search-product");
    const filter = input.value.toUpperCase();
    const table = document.querySelector(".t-productos");
    const rows = Array.from(table.querySelectorAll("tbody tr"));
    let hasResults = false;
    
  
    rows.forEach(row => {
        const cell = row.querySelector("td:nth-child(2)"); 

        if (cell) {
            const text = cell.textContent.toUpperCase();
            if (text.includes(filter)) {
                row.style.display = "";
                hasResults = true;
                highlightText(cell, filter);
            } else {
                row.style.display = "none";
            }
        }
    });
}
