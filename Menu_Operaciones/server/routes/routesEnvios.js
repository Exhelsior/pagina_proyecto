const express = require('express');
const router = express.Router();
const {
    getAllEnvios,
    getEnvio,
    updateEnvio,
    createEnvio
} = require('../controller/controller_envios/enviosController');

// Rutas Envios
router.get('/', getAllEnvios);
router.get('/:id', getEnvio);
router.put('/update/:id', updateEnvio);
router.post('/create', createEnvio);

module.exports = router;
