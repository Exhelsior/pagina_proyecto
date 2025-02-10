//contenido modales
const modalContent = {
    addProduct: 
        `
        <h1>Producto</h1>
        <form id="tb-add-producto">
            <div class="form-content">
                <h3>Nombre</h3>
                <input type="text" placeholder="Nombre del producto" id="name-product">
            </div>
            <div class="form-content">
                <h3>Fecha de <br> fabricacion</h3>
                <input type="date" id="fab-date-product">
            </div>
            <div class="form-content">
                <h3>Fecha de <br> vencimiento</h3>
                <input type="date" id="venc-date-product">
            </div>
            <div class="form-content">
                <h3>Precio Unitario</h3>
                <input type="number" placeholder="Precio" id="price-product">
            </div>
            <div class="form-content">
                <h3>Cantidad</h3>
                <input type="number" placeholder="Cantidad" id="cant-product">
            </div>
            <div class="boton-add">
                <button id="btn-form-product" class="add">Agregar Producto</button>
            </div>
        </form>
        `,

    addBillProduct:
        `
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
                        <td>Pan Frances</td>
                        <td>$5000</td>
                        <td>
                            <input type="number" id="cant-bill-prodcut"/>
                        </td>
                        <td>
                            <input type="checkbox" class="check-producto"/>
                        </td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Pan Frances</td>
                        <td>$5000</td>
                        <td>
                            <input type="number" id="cant-bill-prodcut"/>
                        </td>
                        <td>
                            <input type="checkbox" class="check-producto"/>
                        </td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Pan Frances</td>
                        <td>$5000</td>
                        <td>
                            <input type="number" id="cant-bill-prodcut"/>
                        </td>
                        <td>
                            <input type="checkbox" class="check-producto"/>
                        </td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Pan Frances</td>
                        <td>$5000</td>
                        <td>
                            <input type="number" id="cant-bill-prodcut"/>
                        </td>
                        <td>
                            <input type="checkbox" class="check-producto"/>
                        </td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Pan Frances</td>
                        <td>$5000</td>
                        <td>
                            <input type="number" id="cant-bill-prodcut"/>
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
        `
};

//eventos botones
export function listenerButton(openCallbackModal){
    document.getElementById("add-producto").addEventListener("click", () => {
        openCallbackModal(modalContent.addProduct);
    })
}

export function listenerBillButton(openCallbackModal) {
    document.getElementById("bill-add-product").addEventListener("click", () => {
        openCallbackModal(modalContent.addBillProduct);
    })
}
