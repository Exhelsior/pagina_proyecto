const express = require('express');
const router = express.Router();
const crearUsuario = require('../controller/insertUsuarios');
const getUsuarios = require('../controller/getUsuarios');
const eliminarUsuario = require('../controller/deleteUsuarios');
const actualizarUsuario = require('../controller/updateUsuarios');
const tokenUsuarios = require('../controller/tokenUsuarios');
const recoveryUsuarios = require('../controller/recoveryUsuarios');

// Rutas para usuarios
router.post('/', crearUsuario);
router.get('/get/:id', getUsuarios);
router.get('/recovery', recoveryUsuarios);
router.delete('/:id', eliminarUsuario);
router.put('/:id', actualizarUsuario);
router.post('/token', tokenUsuarios)

module.exports = router;