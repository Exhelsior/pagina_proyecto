// routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const crearUsuario = require('../controller/insertUsuarios');
const getUsuarios = require('../controller/getUsuarios');
const eliminarFisico = require('../controller/deleteUsuarios');


// Rutas para usuarios
router.post('/', crearUsuario);
router.get('/get', getUsuarios);
router.delete('/:id', eliminarFisico);

module.exports = router;