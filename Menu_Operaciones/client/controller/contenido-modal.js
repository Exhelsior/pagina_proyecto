// Contenido de los modales
 export const modalContent = {
    addProduct: `
        <h2>Producto</h2>
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
        <h2>Agregar Producto <br> a la Factura</h2>
        <div id="bill-tb" class="tb-bill">
            <table class="tabla-productos">
                <thead class="head-pedidos">
                    <tr>
                        <th>NOMBRE</th>
                        <th>PRECIO UNITARIO</th>
                        <th>CANTIDAD DISPONIBLE</th>
                        <th>CANTIDAD A LLEVAR </th>
                        <th>CHECK</th>    
                    </tr>
                </thead>
                <tbody>
                    
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
    
    aceptDeletePedido: `
        <p>¿Estás seguro de eliminar el pedido?</p>
        <div class="boton-add">
            <button id="delete-pedido-modal" class="add">Eliminar</button>
            <button id="cancel-delete" class="cancel">Cancelar</button>
        </div>
    `,

    aceptDeleteEnvio: `
        <p>¿Estás seguro de eliminar el envio?</p>
        <div class="boton-add">
            <button id="delete-envio-modal" class="add">Eliminar</button>
            <button id="cancel-envio" class="cancel">Cancelar</button>
        </div>
    `,

    agendamientoAcept: `
        <p>¿Agendar pedido?</p>
        <div class="boton-add">
            <button id="acept-pedido" class="add">Aceptar</button>
            <button id="cancel-pedido" class="cancel">Cancelar</button>
        </div>
    `,

    formEdit: `
    <h2>Editar Producto</h2>
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

    listProductEnvios: `
        <h2>Lista de Productos</h2>
        <div id="productos-envios"">
            <table id="t-envios" class="t-envios">
                <thead class="head-productos">
                    <th>NOMBRE</th>
                    <th>CANTIDAD</th>
                    <th>TOTAL</th>
                </thead>
                <tbody id="body-productos-envios">
                
                </tbody>
            </table>
        </div>
    `

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
    const modalBody = document.getElementById("modal-body"); // Asegúrate que este sea el contenedor interno real

    modal.addEventListener("click", (e) => {
        if (!modalBody.contains(e.target)) {
            closeModal();
        }
    });
}


// Configurar botón de cierre del modal
export function setupModalClose() {
    const closeModalButton = document.getElementById("close");
    const equise = document.getElementById("cancel-delete")
    if (closeModalButton) {
        closeModalButton.addEventListener("click", closeModal);
    }
    if (equise){
        equise.addEventListener("click", closeModal);
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

    document.getElementById("send-bill")?.addEventListener("click", () =>
        openCallbackModal(modalContent.agendamientoAcept)
    );
    
    document.getElementById("list-productos")?.addEventListener("click", () =>
        openCallbackModal(modalContent.listProductEnvios)
    );

    document.getElementById("eliminar-pedido")?.addEventListener("click", () =>
        openCallbackModal(modalContent.aceptDeletePedido)
        
    );
}
