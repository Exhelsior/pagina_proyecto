const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/controller usuarios/usuarioController');

router.post('/usuarios', usuarioController.crearUsuario);

module.exports = router;