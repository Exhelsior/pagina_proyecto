// index.js
const express = require('express');
const { testConnection } = require('../database/db.js');
const usuarioRoutes = require('../routes/routes.js');

const app = express();
app.use(express.json());

// Probar la conexión a la base de datos
testConnection();

// Usar las rutas
app.use('/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});