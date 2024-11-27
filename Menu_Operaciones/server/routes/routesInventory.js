const express = require('express');
const router = express.Router();
const { 
    getInventory, 
    updateProducto,
    createProducto,
    deleteProducto,
    getInsumo,
    updateInsumo,
    createInsumo,
    deleteInsumo } = require('../controller/controller_inventario/inventarioController');



//Rutas de Inventario 
router.get('/producto/:id', getInventory);
router.put('/producto/update/:id', updateProducto);
router.post('/producto/create', createProducto);
router.delete('/producto/delete/:id', deleteProducto);
router.get('/insumo/:id', getInsumo);
router.put('/insumo/update/:id', updateInsumo);
router.post('/insumo/create', createInsumo);
router.delete('/insumo/delete/:id', deleteInsumo);

module.exports = router;