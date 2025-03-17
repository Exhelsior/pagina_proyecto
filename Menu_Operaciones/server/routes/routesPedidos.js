const express = require('express');
const router = express.Router();
const {
    getAllPedidos,
    getPedido,
    updatePedido,
    createPedido,
    deletePedido,
    getAllItemPedido,
    getItemPedido,
    updateItemPedido,
    createItemPedido,
    deleteItemPedido,
} = require('../controller/controller_pedidos/pedidosControler');

router.get('/', getAllPedidos);
router.get('/:id', getPedido);
router.put('/update/:id', updatePedido);
router.post('/create', createPedido);
router.delete('/delete/:id', deletePedido);

router.get('/item', getAllItemPedido);
router.get('/item/:id', getItemPedido);
router.put('/item/update/:id', updateItemPedido);
router.post('/item/create', createItemPedido);
router.delete('/item/delete/:id', deleteItemPedido);




module.exports = router;
