const express = require('express');
const router = express.Router();
const { 
    getInventory, 
    updateProducto,
    createProducto,
    deleteProducto } = require('../controller/controller_inventario/inventarioController');



//Rutas de Inventario
router.get('/:id', getInventory);
router.put('/:id', updateProducto);
router.post('/create-product', createProducto);
router.delete('/delete-producto/:id', deleteProducto);

module.exports = router;