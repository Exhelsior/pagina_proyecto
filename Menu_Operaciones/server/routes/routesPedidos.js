const express = require('express');
const router = express.Router();
const {
    getAllPedidos,
    getAllItemPedido,
    getPedidoComplete,
    updatePedido,
    createPedido,
    deletePedido,
    getItemPedido
} = require('../controller/controller_pedidos/pedidosControler');

router.get('/', getAllPedidos);
router.get('/:id', getPedidoComplete);
router.get('/items', getAllItemPedido)
router.get('/items/:id', getItemPedido)
router.put('/update/:id', updatePedido);
router.post('/create', createPedido);
router.delete('/delete/:id', deletePedido);

module.exports = router;
