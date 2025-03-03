/**
 * Creado el 26 de noviembre del 2024
 * Funcion: Archivo encargado de la conexión principal y su ruta primaria 
 * Funcion: Archivo encargado de la conexión principal y su ruta primaria 
 */
const express = require('express');
const cors = require('cors');
const { testConnection } = require('../database/db.js');
const usuarioRoutes = require('../routes/routes.js');
const inventoryRoutes = require('../routes/routesInventory.js');
const envioRoutes = require('../routes/routesEnvios.js');

const app = express();
app.use(express.urlencoded({ extended: true }));

const path = require('path');

app.use(express.static(path.join(__dirname, '../../client')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
});

// Middleware para permitir CORS
app.use(cors({
    origin: "*", // "*" permite cualquier url
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para procesar JSON en las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Probar la conexión a la base de datos
testConnection();

// Definir las rutas
// Definir las rutas
app.use('/usuarios', usuarioRoutes);
app.use('/inventario', inventoryRoutes);
app.use('/envio', envioRoutes);
app.use('/envio', envioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if (error) {
        console.error('Error al iniciar el servidor:', error);
        return;
    }
    console.log(`Servidor corriendo en el port:${PORT}`);
});
