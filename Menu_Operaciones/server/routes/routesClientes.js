const express = require('express');
const router = express.Router();
const {
    getAllCustomer,
    getCustomer,
    updateCustomer,
    createCustomer,
    deleteCustomer
} = require('../controller/controller_clientes/clientesController');

//Rutas Clientes
router.get('/', getAllCustomer);
router.get('/:id', getCustomer);
router.put('/update/:id', updateCustomer);
router.post('/create', createCustomer);
router.delete('/delete/:id', deleteCustomer);

module.exports = router;