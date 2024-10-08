const pagInventarios = document.getElementById('pag-inventarios');
const pagInsumos = document.getElementById('pag-insumo');
const pagProductos = document.getElementById('pag-productos');
const pagFacturacion = document.getElementById('pag-facturacion');
const pagPedidos = document.getElementById('pag-pedidoss');
const mainContenido=document.getElementById('main-contenido');

pagInventarios.addEventListener('click',(e) => {
    mainContenido.innerHTML = `<div class="contenido-inventario">
                        <h1>INVENTARIOS</h1>
                        <div class="contenedor-grid">
                            <div class="inventario">
                                <h2>INVENTARIO PRODUCTOS</h2>
                                <div class="filtro">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e0e0e0">
                                        <path d="M80-200v-80h400v80H80Zm0-200v-80h200v80H80Zm0-200v-80h200v80H80Zm744 400L670-354q-24 17-52.5 25.5T560-320q-83 0-141.5-58.5T360-520q0-83 58.5-141.5T560-720q83 0 141.5 58.5T760-520q0 29-8.5 57.5T726-410l154 154-56 56ZM560-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
                                    </svg>
                                    <input type="text" placeholder="Buscar producto" id="product">
                                </div>
                                <div class="contendor-tabla-producto">
                                    <table class = "t-productos">
                                        <thead class = "head-productos">
                                            <tr>
                                                <th>ID</th>
                                                <th>NOMBRE</th>
                                                <th>FECHA DE <br/>FABRICACIÓN</th>
                                                <th>FECHA DE <br>VENCIMIENTO</th>
                                                <th>CANTIDAD</th>
                                                <th>ACCIONES</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>001</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>002</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>003</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>004</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>005</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>006</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>007</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>008</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>009</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>010</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                                <tr>
                                                <td>011</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>012</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>013</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>014</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>015</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>016</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>017</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>018</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>019</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>020</td>
                                                <td>Pan Bagget</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="boton-add">
                                    <button class="add">Agregar Producto</button>
                                </div>                          
                            </div>
                            <div class="inventario insumos">
                                <h2>INVENTARIOS INSUMOS</h2>
                                <div class="filtro">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e0e0e0">
                                        <path d="M80-200v-80h400v80H80Zm0-200v-80h200v80H80Zm0-200v-80h200v80H80Zm744 400L670-354q-24 17-52.5 25.5T560-320q-83 0-141.5-58.5T360-520q0-83 58.5-141.5T560-720q83 0 141.5 58.5T760-520q0 29-8.5 57.5T726-410l154 154-56 56ZM560-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
                                    </svg>
                                    <input type="text" placeholder="Buscar producto" id="product">
                                </div>
                                <div class="contenedor-tabla-insumos">
                                    <table class = "t-insumos">
                                        <thead class = "head-insumos">
                                            <tr>
                                                <th>ID</th>
                                                <th>NOMBRE</th>
                                                <th>FECHA DE <br/>INGRESO</th>
                                                <th>FECHA DE <br>VENCIMIENTO</th>
                                                <th>CANTIDAD</th>
                                                <th>ACCIONES</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>001</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>002</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>003</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>004</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>005</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>006</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>007</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>008</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>009</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>010</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                                <tr>
                                                <td>011</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>012</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>013</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>014</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>015</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>016</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>017</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>018</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>019</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>020</td>
                                                <td>Levadura</td>
                                                <td>06/SEP/2024</td>
                                                <td>15/SEP/2025</td>
                                                <td>500</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="boton-add">
                                    <button class="add">Agregar Insumo</button>
                                </div>
                            </div>
                        </div>
                    </div>`})
    

pagInsumos.addEventListener('click',(e) => {
    mainContenido.innerHTML = `
    <div class="contenedor-insumos mostrar-insumo">
                    <h1>INSUMOS DISPONIBLES</h1>
                    <div class = "filtro">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e0e0e0">
                            <path d="M80-200v-80h400v80H80Zm0-200v-80h200v80H80Zm0-200v-80h200v80H80Zm744 400L670-354q-24 17-52.5 25.5T560-320q-83 0-141.5-58.5T360-520q0-83 58.5-141.5T560-720q83 0 141.5 58.5T760-520q0 29-8.5 57.5T726-410l154 154-56 56ZM560-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
                        </svg>
                        <input type="text" placeholder="Buscar Productos" ng-model = "buscar-producto"/>
                    </div>
                    <div class= "tabla" >
                        <table class="tabla-insumos">
                            <thead class="insumo-muestra">
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Fecha de Fabricación</th>
                                    <th>Fecha de Vencimiento</th>
                                    <th>Cantidad</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Harina de Trigo Has de Oro</td>
                                    <td>$50,000</td>
                                    <td>24-Agosto-2024</td>
                                    <td>24-Agosto-2024</td>
                                    <td>505Lb</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Harina de Trigo Has de Oro</td>
                                    <td>$50,000</td>
                                    <td>24-Agosto-2024</td>
                                    <td>24-Agosto-2024</td>
                                    <td>505Lb</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Harina de Trigo Has de Oro</td>
                                    <td>$50,000</td>
                                    <td>24-Agosto-2024</td>
                                    <td>24-Agosto-2024</td>
                                    <td>505Lb</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Harina de Trigo Has de Oro</td>
                                    <td>$50,000</td>
                                    <td>24-Agosto-2024</td>
                                    <td>24-Agosto-2024</td>
                                    <td>505Lb</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Harina de Trigo Has de Oro</td>
                                    <td>$50,000</td>
                                    <td>24-Agosto-2024</td>
                                    <td>24-Agosto-2024</td>
                                    <td>505Lb</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Harina de Trigo Has de Oro</td>
                                    <td>$50,000</td>
                                    <td>24-Agosto-2024</td>
                                    <td>24-Agosto-2024</td>
                                    <td>505Lb</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Harina de Trigo Has de Oro</td>
                                    <td>$50,000</td>
                                    <td>24-Agosto-2024</td>
                                    <td>24-Agosto-2024</td>
                                    <td>505Lb</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Harina de Trigo Has de Oro</td>
                                    <td>$50,000</td>
                                    <td>24-Agosto-2024</td>
                                    <td>24-Agosto-2024</td>
                                    <td>505Lb</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Harina de Trigo Has de Oro</td>
                                    <td>$50,000</td>
                                    <td>24-Agosto-2024</td>
                                    <td>24-Agosto-2024</td>
                                    <td>505Lb</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Harina de Trigo Has de Oro</td>
                                    <td>$50,000</td>
                                    <td>24-Agosto-2024</td>
                                    <td>24-Agosto-2024</td>
                                    <td>505Lb</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Harina de Trigo Has de Oro</td>
                                    <td>$50,000</td>
                                    <td>24-Agosto-2024</td>
                                    <td>24-Agosto-2024</td>
                                    <td>505Lb</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Harina de Trigo Has de Oro</td>
                                    <td>$50,000</td>
                                    <td>24-Agosto-2024</td>
                                    <td>24-Agosto-2024</td>
                                    <td>505Lb</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Harina de Trigo Has de Oro</td>
                                    <td>$50,000</td>
                                    <td>24-Agosto-2024</td>
                                    <td>24-Agosto-2024</td>
                                    <td>505Lb</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Harina de Trigo Has de Oro</td>
                                    <td>$50,000</td>
                                    <td>24-Agosto-2024</td>
                                    <td>24-Agosto-2024</td>
                                    <td>505Lb</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Harina de Trigo Has de Oro</td>
                                    <td>$50,000</td>
                                    <td>24-Agosto-2024</td>
                                    <td>24-Agosto-2024</td>
                                    <td>505Lb</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`})

