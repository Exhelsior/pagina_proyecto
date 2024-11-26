const express = require('express');
const router = express.Router();
const getInventory = require('../controller/inventory-controller/getProducto');
const updateProducto = require('../controller/inventory-controller/updateProducto');


//Rutas de Inventario
router.get('/:id', getInventory);
router.put('/:id', updateProducto);

module.exports = router;