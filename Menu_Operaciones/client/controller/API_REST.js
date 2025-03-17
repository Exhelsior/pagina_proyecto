const API_URL = 'http://localhost:3000/';

export const apiClient = {
    async getAllProductos(path) {
        try {
            const response = await fetch(`${API_URL}${path}`, );
            if (!response.ok) throw new Error('Error al obtener productos');
            return await response.json();
        } catch (error) {
            console.error(error.message);
            return null;
        }
    },

    async getByIdProducto(id, path) {
        try {
            const response = await fetch(`${API_URL}${path}/${id}`);
            if (!response.ok) throw new Error('Producto no encontrado');
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    async createProducto(data, path) {
        try {
            const response = await fetch(`${API_URL}${path}/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Error al crear el producto');
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    async updateProducto(path, id, data) {
        try {
            const response = await fetch(`${API_URL}${path}/update/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Error al actualizar el producto');
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    async deleteProducto(path, id) {
        try {
            const response = await fetch(`${API_URL}${path}/delete/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Error al eliminar el producto');
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },
    // ----------pedidos----------------

    async createPedido(data, path) {
        try {
            const response = await fetch(`${API_URL}${path}/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Error al crear el pedido');
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
};


//-----------------------------------------------------------------------------------------
export function generateDataRows(productos, type) {
    return productos.map((producto, index) => {
        function formatearFecha(fecha) {
            return new Date(fecha).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });
        }

        if (type === "productos") {
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
                        <button id="btn-edit" class="add-boton-tabla t-boton">
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
        } else if (type === "pedido") {
            return `
            <tr data-index="${index}">
                <td>${producto.NombreProducto}</td>
                <td>$${producto.Precio}</td>
                <td>${producto.Cantidad}</td>
                <td><input placeholder="Cant." type="number" min="1"/></td>
                <td><input class="checkItem"type="checkbox"/></td>
            </tr>
            `;
        }
    }).join("");
}