export async function products() {
    console.log("📢 Cargando productos...");

    try {
        const response = await fetch('http://localhost:3000/inventario');
        if (!response.ok) throw new Error("Producto no encontrado");

        const data = await response.json();
        console.log("Productos recibidos:", data);

        mostrarProductos(data);

    } catch (error) {
        console.error("❌ Error:", error.message);
    }
}

export function mostrarProductos(productos) {
    const tbody = document.querySelector('.t-productos .t-body');

    if (!tbody) {
        console.error("❌ Error: No se encontró el tbody en la tabla.");
        return;
    }

    tbody.innerHTML = ''; // Limpiar antes de agregar nuevos datos

    if (productos.length === 0) {
        tbody.innerHTML = "<tr><td colspan='7'>No hay productos disponibles</td></tr>";
        return;
    }

    productos.forEach(producto => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${producto.IdProducto}</td>
            <td>${producto.NombreProducto}</td>
            <td>${producto.Lote}</td>
            <td>${producto.FechaVencimiento}</td>
            <td>$${producto.Precio}</td>
            <td>${producto.Cantidad}</td>
            <td>
                <div class="b-caja">
                        <button class="add-boton-tabla">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil"
                            viewBox="0 0 16 13"
                          >
                            <path
                              d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
                            />
                          </svg>
                        </button>
                        <button class="del-boton-tabla">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-x"
                            viewBox="0 0 16 13"
                          >
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                            />
                          </svg>
                        </button>
                      </div>
            </td>
        `;

        tbody.appendChild(fila);
    });

    console.log("✅ Productos mostrados en la tabla.");
}