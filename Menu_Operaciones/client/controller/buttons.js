//contenido modales
const modalContent = {
    addProduct: 
        `
        <h1>Producto</h1>
        <form id="tb-add-producto">
            <div class="form-content">
                <label>Nombre</label>
                <input type="text" placeholder="Nombre del producto" id="name-product">
            </div>
            <div class="form-content">
                <label>Fecha de <br> fabricacion</label>
                <input type="date" id="fab-date-product">
            </div>
            <div class="form-content">
                <label>Fecha de <br> vencimiento</label>
                <input type="date" id="venc-date-product">
            </div>
            <div class="form-content">
                <label>Cantidad</label>
                <input type="number" placeholder="Cantidad" id="cant-product">
            </div>
            <div class="boton-add">
                <button id="btn-form-product" class="add">Agregar Producto</button>
            </div>
        </form>
        `,
    
    addInsumos: 
        `
        <h1>Insumos</h1>
        <form id="tb-add-insumo">
            <div class="form-content">
                <label>Nombre</label>
                <input type="text" placeholder="Nombre del insumo" id="name-product">
            </div>
            <div class="form-content">
                <label>Fecha de <br> ingreso</label>
                <input type="date" id="fab-date-insumo">
            </div>
            <div class="form-content">
                <label>Fecha de <br> vencimiento</label>
                <input type="date" id="venc-date-insumo">
            </div>
            <div class="form-content">
                <label>Cantidad</label>
                <input type="number" placeholder="Cantidad" id="cant-insumo">
            </div>
            <div class="boton-add">
                <button id="btn-form-product" class="add">Agregar Insumo</button>
            </div>
        </form>
        `,

    addBillProduct:
        `
        <h1>Factura</h1>
        `
};

//eventos botones
export function listenerButton(openCallbackModal){
    document.getElementById("add-producto").addEventListener("click", () => {
        openCallbackModal(modalContent.addProduct);
    })

    document.getElementById("add-insumo").addEventListener("click", () => {
        openCallbackModal(modalContent.addInsumos);
    })
}

export function listenerBillButton(openCallbackModal) {
    document.getElementById("bill-add-product").addEventListener("click", () => {
        openCallbackModal(modalContent.addBillProduct);
    })
}
