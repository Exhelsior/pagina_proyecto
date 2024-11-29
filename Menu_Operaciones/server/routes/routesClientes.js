const express = require('express');
const router = express.Router();
const {
    getAllCustomer,
    getCustomer,
    updateCustomer
} = require('../controller/controller_clientes/clientesController');

//Rutas Clientes
router.get('/', getAllCustomer);
router.get('/:id', getCustomer);
router.get('/update/:id', updateCustomer);

module.exports = router;