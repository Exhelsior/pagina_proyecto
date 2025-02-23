/**
 * Creado el 26 de noviembre del 2024
 * Funcion: Archivo encargado de la conexión principal y su ruta primaria 
 */
const express = require('express');
const cors = require('cors');
const { testConnection } = require('../database/db.js');
const usuarioRoutes = require('../routes/routes.js');
const inventoryRoutes = require('../routes/routesInventory.js');
const envioRoutes = require('../routes/routesEnvios.js');

const app = express(); // Aquí se define 'app' correctamente antes de usarlo

// Middleware para permitir CORS
app.use(cors({
    origin: "*", // "*" permite cualquier url
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para procesar JSON en las solicitudes
app.use(express.json());

// Probar la conexión a la base de datos
testConnection();

// Definir las rutas
app.use('/usuarios', usuarioRoutes);
app.use('/inventario', inventoryRoutes);
app.use('/envio', envioRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
