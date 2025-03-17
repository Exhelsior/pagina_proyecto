const { pool } = require("../../database/db");


const getAllPedidos = async (req, res) => {
    try {
        const {id} = req.params;
        const [pedido] = await pool.query('SELECT * FROM Pedido', [id]);
        res.json(pedido);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener Pedido',
            detalles: error.message
        })
    };
};

const getPedido = async (req, res) => {
    try {
        const { id} = req.params;
        const [Pedido] = await pool.query('SELECT * FROM Pedido WHERE idPedido = ?', [id]);
        res.json(Pedido);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener Pedido',
            detalles: error.message
        })
    };
};

const updatePedido = async (req, res) => {
    try {
        const { id } = req.params;
        const { nameCliente, fechaCreacion, fechaEntrega, direccion, telefono } = req.body;

        const [result] = await pool.query(
            'UPDATE Pedido SET nameCliente = ?, fechaCreacion = ?, fechaEntrega = ?, direccion = ?, telefono = ? WHERE idPedido = ?', [ nameCliente, fechaCreacion, fechaEntrega, direccion, telefono, id]
        );

        if (result.affectedRows > 0) {
            res.json({ mensaje: 'Pedido actualizado exitosamente' });
        } else {
            res.status(404).json({ mensaje: 'Pedido no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al actualizar Pedido',
            detalles: error.message
        })
    }
};

const createPedido = async (req, res) => {
    try {
        const { nameCliente, fechaCreacion, fechaEntrega, direccion, telefono } = req.body;

        const [result] = await pool.query(
            "INSERT INTO Pedido (nameCliente, fechaCreacion, fechaEntrega, direccion, telefono) VALUES (?, ?, ?, ?, ?)", [nameCliente, fechaCreacion, fechaEntrega, direccion, telefono]
        );

        res.status(201).json({
            id: result.insertId,
            mensaje: 'Pedido creado exitosamente'
        })
    } catch (error) {
        console.error('Error al crear el Pedido:', error);
        res.status(500).json({
            error: 'Error al crear Pedido',
            detalles: error.message
        });
    }
};

const deletePedido = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query('DELETE FROM Pedido WHERE idPedido = ?', [id]);

        if (result.affectedRows === 0) {
            res.status(404).json({ mensaje: 'Pedido no encontrado' });
        }
         res.json({ mensaje: 'Pedido eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({
            error: 'Error al eliminar Pedido',
            detalles: error.message
        });
    }
};

// ------------------------------------------------------------------------------------
const getAllItemPedido = async (req, res) => {
    try{
        const { id } = req.params;
        const [itemPedido] = await pool.query('SELECT * FROM ItemPedido', [id]);
        res.json(itemPedido);
    }catch (error) {
        res.status(500).json({
            error: 'Error al obtener listado de ItemPedido',
            detalles: error.message
        })
    };
};

const getItemPedido = async (req, res) => {
    try {
        const { id} = req.params;
        const [itemPedido] = await pool.query('SELECT * FROM itemPedido WHERE idItemPedido = ?', [id]);
        res.json(itemPedido);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener ItemPedido',
            detalles: error.message
        })
    };
};

const updateItemPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const { idPedido, idProducto, cantidad, total } = req.body;

        const [result] = await pool.query(
            'UPDATE itemPedido SET idPedido = ?, idProducto = ?, cantidad = ?, total = ? WHERE idItemPedido = ?', [idPedido, idProducto, cantidad, total, id]
        );

        if (result.affectedRows > 0) {
            res.json({ mensaje: 'ItemPedido actualizado exitosamente' });
        } else {
            res.status(404).json({ mensaje: 'ItemPedido no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al actualizar ItemPedido',
            detalles: error.message
        })
    }
};

const createItemPedido = async (req, res) => {
    try {
        const { idPedido, idProducto, cantidad, total } = req.body;

        const [result] = await pool.query(
            "INSERT INTO itemPedido (idPedido, idProducto, cantidad, total) VALUES (?, ?, ?, ?)", [idPedido, idProducto, cantidad, total]
        );

        res.status(201).json({
            id: result.insertId,
            mensaje: 'ItemPedido creado exitosamente'
        })
    } catch (error) {
        console.error('Error al crear el itemPedido:', error);
        res.status(500).json({
            error: 'Error al crear ItemPedido',
            detalles: error.message
        });
    }
};

const deleteItemPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query('DELETE FROM itemPedido WHERE idItemPedido = ?', [id]);

        if (result.affectedRows === 0) {
            res.status(404).json({ mensaje: 'ItemPedido no encontrado' });
        }
         res.json({ mensaje: 'ItemPedido eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({
            error: 'Error al eliminar ItemPedido',
            detalles: error.message
        });
    }
};
// ------------------------------------------------------------------------------------


module.exports = {
    getAllPedidos,
    getPedido,
    updatePedido,
    createPedido,
    deletePedido,
    
    getAllItemPedido,
    getItemPedido,
    updateItemPedido,
    createItemPedido,
    deleteItemPedido
};
