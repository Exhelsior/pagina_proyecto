const express = require('express');
const router = express.Router();
const { 
    getAllInventory,
    getInventory, 
    updateProducto,
    createProducto,
    deleteProducto,
    getAllInsumo,
    getInsumo,
    updateInsumo,
    createInsumo,
    deleteInsumo } = require('../controller/controller_inventario/inventarioController');



//Rutas de Inventario 
router.get('/producto', getAllInventory);
router.get('/producto/:id', getInventory);
router.put('/producto/update/:id', updateProducto);
router.post('/producto/create', createProducto);
router.delete('/producto/delete/:id', deleteProducto);
router.get('/insumo', getAllInsumo);
router.get('/insumo/:id', getInsumo);
router.put('/insumo/update/:id', updateInsumo);
router.post('/insumo/create', createInsumo);
router.delete('/insumo/delete/:id', deleteInsumo);

module.exports = router;