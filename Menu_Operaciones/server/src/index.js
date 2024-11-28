/**
 * Creado el 26 de noviembre del 2024
 * Funcion: Archivo encargado de la conexion principal y su ruta primaria 
 */
const express = require('express');
const { testConnection } = require('../database/db.js');
const usuarioRoutes = require('../routes/routes.js');
const inventoryRoutes = require('../routes/routesInventory.js')

const app = express();
app.use(express.json());

// Probar la conexión a la base de datos
testConnection();

// Usar las rutas
app.use('/usuarios', usuarioRoutes);
app.use('/inventarios', inventoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
