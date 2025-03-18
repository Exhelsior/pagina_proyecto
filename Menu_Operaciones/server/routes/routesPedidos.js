const express = require('express');
const router = express.Router();
const {
    getAllPedidos,
    getAllItemPedido,
    getPedido,
    updatePedido,
    createPedido,
    deletePedido
} = require('../controller/controller_pedidos/pedidosControler');

router.get('/', getAllPedidos);
router.get('/items', getAllItemPedido)
router.get('/:id', getPedido);
router.put('/update/:id', updatePedido);
router.post('/create', createPedido);
router.delete('/delete/:id', deletePedido);

module.exports = router;
