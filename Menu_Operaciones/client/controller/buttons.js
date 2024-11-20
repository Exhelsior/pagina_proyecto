//contenido modales
const modalContent = {
    addProduct: 
        `
        <span id="close" class="close">&times;</span>
        <h1>Producto</h1>
        `,
    
    AddInsumos: 
        `
        <span id="close" class="close">&times;</span>
        <h1>Insumos</h1>
        `
}

//eventos botones
export function listenerButton(openCallbackModal){
    document.getElementById("add-producto").addEventListener("click", () => {
        openCallbackModal(modalContent.addProduct);
    })

    document.getElementById("add-insumo").addEventListener("click", () => {
        openCallbackModal(modalContent.AddInsumos);
    })
}