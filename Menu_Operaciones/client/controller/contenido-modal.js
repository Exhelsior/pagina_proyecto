// Contenido de los modales
 export const modalContent = {
    addProduct: `
        <h1>Producto</h1>
        <form id="tb-add-producto">
            <div class="form-content">
                <h3>Nombre</h3>
                <input type="text" placeholder="Nombre del producto" id="name-product">
            </div>
            <div class="form-content">
                <h3>Fecha de <br> fabricación</h3>
                <input type="date" id="fab-date-product">
            </div>
            <div class="form-content">
                <h3>Fecha de <br> vencimiento</h3>
                <input type="date" id="venc-date-product">
            </div>
            <div class="form-content">
                <h3>Precio Unitario</h3>
                <input type="number" placeholder="Precio" id="price-product" min="1">
            </div>
            <div class="form-content">
                <h3>Cantidad</h3>
                <input type="number" placeholder="Cantidad" id="cant-product" min="1">
            </div>
            <div class="boton-add">
                <button id="btn-form-product" class="add" type="button">Agregar Producto</button>
            </div>
        </form>
    `,

    addBillProduct: `
        <h1>Agregar Producto <br> a la Factura</h1>
        <div class="tb-bill">
            <table class="tabla-productos">
                <thead class="head-pedidos">
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>PRECIO UNITARIO</th>
                        <th>CANTIDAD</th>
                        <th>CHECK</th>    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Pan Francés</td>
                        <td>$5000</td>
                        <td>
                            <input type="number" class="cant-bill-product"/>
                        </td>
                        <td>
                            <input type="checkbox" class="check-producto"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="boton-add">
            <button id="add-product-bill" class="add">Añadir Productos</button>
        </div>
    `,

    aceptDelete: `
        <p>¿Estás seguro de eliminar el producto?</p>
        <div class="boton-add">
            <button id="delete-product" class="add">Eliminar</button>
            <button id="cancel-delete" class="cancel">Cancelar</button>
        </div>
    `,
    formEdit: `
    <h1>Editar Producto</h1>
    <form id="tb-edit-producto">

        <div id="form-edit" class="form-content">
            <h3>ID</h3>
            <input type="text" id="producto-id" readonly>
        </div>

        <div id="form-edit" class="form-content">
            <h3>Nombre</h3>
            <input type="text" placeholder="Nombre del producto" id="name-product">
        </div>

        <div class="form-content">
            <h3>Fecha de <br> fabricación</h3>
            <input type="date" id="fab-date-product">
        </div>

        <div class="form-content">
            <h3>Fecha de <br> vencimiento</h3>
            <input type="date" id="venc-date-product">
        </div>

        <div class="form-content">
            <h3>Precio Unitario</h3>
            <input type="number" placeholder="Precio" id="price-product" min="1">
        </div>

        <div class="form-content">
            <h3>Cantidad</h3>
            <input type="number" placeholder="Cantidad" id="cant-product" min="1">
        </div>

        <div class="boton-add">
            <button id="btn-edit-product" class="add" type="button">Actualizar</button>
            <button id="cancel-update" type="button" class="cancel">Cancelar</button>
        </div>
        </form>
    `,

    loged: '<h1>¡Bienvenido!</h1><p>Has iniciado sesión correctamente</p>',

};

// Función para abrir el modal
export function openModal(content) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    
    modalBody.innerHTML = content;
    modal.style.display = "flex";
}

// Función para cerrar el modal
export function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Cerrar modal al hacer clic afuera
export function outsideClose() {
    const modal = document.getElementById("modal");
    modal.addEventListener("click", (e) => {
        const modalContent = document.querySelector("#modal-content");
        if (!modalContent.contains(e.target)) {
            closeModal();
        }
    });
}

// Configurar botón de cierre del modal
export function setupModalClose() {
    const closeModalButton = document.getElementById("close");
    if (closeModalButton) {
        closeModalButton.addEventListener("click", closeModal);
    }
}

// Eventos para abrir modales
export function setupModalListeners(openCallbackModal) {
    document.getElementById("add-producto")?.addEventListener("click", () => {
        openCallbackModal(modalContent.addProduct);
    });

    document.getElementById("bill-add-product")?.addEventListener("click", () => {
        openCallbackModal(modalContent.addBillProduct);
    });
    
    document.getElementById("confirmDelete")?.addEventListener("click", () =>
        openCallbackModal(modalContent.aceptDelete)
    );
}
