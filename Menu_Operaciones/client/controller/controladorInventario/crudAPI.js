import { closeModal } from "../contenido-modal.js";
import { apiClient } from "./API_REST.js";

export async function products() {
    try {
        const data = await apiClient.getAll();
        if (!data) throw new Error("No se encontraron los productos");

        showProducts(data);
        console.log(data);
    } catch (error) {
        console.error("Error", error.message);
    }
}

export function showProducts(productos){
    const tbody = document.querySelector('.t-productos .t-body');

    if (!tbody) {
        console.error("No se encontro la tabla");
        return;
    }

    tbody.innerHTML = '';

    if (productos.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4">No hay productos</td></tr>`;
        return;
    }

    tbody.innerHTML = productos.map((producto, index) => {
        console.log(`Index: ${index}, ID: ${producto.IdProducto}, Nombre: ${producto.NombreProducto}`);
        function formatearFecha(fecha) {
                return new Date(fecha).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                });
        }

        return `
        <tr data-index="${index}">
            <td>${producto.IdProducto}</td>
            <td>${producto.NombreProducto}</td>
            <td>${formatearFecha(producto.Lote)}</td>
            <td>${formatearFecha(producto.FechaVencimiento)}</td>
            <td>$${producto.Precio}</td>
            <td>${producto.Cantidad}</td>
            <td>
                <div class="b-caja">
                    <button class="add-boton-tabla t-boton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" fill="#0a0a0a" class="bi bi-pencil" viewBox="0 0 16 13">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                        </svg>
                    </button>
                    <button id="confirmDelete" class="del-boton-tabla t-boton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 13">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
        `;
    }).join("");
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
        const response = await apiClient.create(nuevoProducto);
        console.log(response);
        if (!response) {
            throw new Error(" Error al crear el producto");
        } 

        alert("Producto creado exitosamente");
        console.log("producto creado:", response);
        products();

        closeModal()
        
    } catch (error) {
        console.error(error.message);
        alert(`Error al crear el producto: ${error.message}`);
    }
};