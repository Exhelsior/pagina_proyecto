const express = require('express');
const router = express.Router();
const crearUsuario = require('../controller/controller usuarios/insertUsuarios');
const getUsuarios = require('../controller/controller usuarios/getUsuarios');
const eliminarUsuario = require('../controller/controller usuarios/deleteUsuarios');
const actualizarUsuario = require('../controller/controller usuarios/updateUsuarios');
const tokenUsuarios = require('../controller/controller usuarios/tokenUsuarios');
const recoveryUsuarios = require('../controller/controller usuarios/recoveryUsuarios'); 

// Rutas para usuarios
router.post('/', crearUsuario);
router.get('/get/:id', getUsuarios);
router.get('/recovery', recoveryUsuarios);
router.delete('/:id', eliminarUsuario);
router.put('/:id', actualizarUsuario);
router.post('/token', tokenUsuarios)

module.exports = router;