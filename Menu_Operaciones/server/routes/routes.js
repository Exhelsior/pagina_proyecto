const express = require('express');
const router = express.Router();
const crearUsuario = require('../controller/insertUsuarios');
const getUsuarios = require('../controller/getUsuarios');
const eliminarFisico = require('../controller/deleteUsuarios');
const actualizarUsuario = require('../controller/updateUsuarios'); // Añade esta línea

// Rutas para usuarios
router.post('/', crearUsuario);
router.get('/get', getUsuarios);
router.delete('/:id', eliminarFisico);
router.put('/:id', actualizarUsuario);

module.exports = router;