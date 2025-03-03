const express = require('express');
const router = express.Router();
const { 
    getAllInventory,
    getInventory, 
    updateProducto,
    createProducto,
    deleteProducto} = require('../controller/controller_inventario/inventarioController');



//Rutas de Inventario 
router.get('/', getAllInventory);
router.get('/:id', getInventory);
router.put('/update/:id', updateProducto);
router.post('/create', createProducto);
router.delete('/delete/:id', deleteProducto);


module.exports = router;