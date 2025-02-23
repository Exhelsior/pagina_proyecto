/**
 * Creado el 26 de noviembre del 2024
 * Funcion: Archivo encargado de la conexion principal y su ruta primaria 
 */
const express = require('express');
const { testConnection } = require('../database/db.js');
const usuarioRoutes = require('../routes/routes.js');
const inventoryRoutes = require('../routes/routesInventory.js');
const customerRoutes = require('../routes/routesClientes.js');
const envioRoutes = require('../routes/routesEnvios.js');
const user = require('../routes/usuarioRoutes.js');

<<<<<<< Updated upstream
const app = express();
=======
const app = express(); 

// Middleware para permitir CORS
app.use(cors({
    origin: "*", 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para procesar JSON en las solicitudes
>>>>>>> Stashed changes
app.use(express.json());

// Probar la conexión a la base de datos
testConnection();

// Usar las rutas
app.use('/usuarios', usuarioRoutes);
app.use('/inventario', inventoryRoutes);
app.use('/cliente', customerRoutes);
app.use('/envio', envioRoutes);
app.use('/user', user);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
