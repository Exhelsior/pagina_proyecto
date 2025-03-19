const { pool } = require("../../database/db");

const getAllPedidos = async (req, res) => {
    try {
        const [pedido] = await pool.query('SELECT * FROM Pedido');
        res.json(pedido);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener Pedido',
            detalles: error.message
        });
    }
};

const getPedido = async (req, res) => {
    try {
        console.log("ID recibido en params:", req.params);

        const { id } = req.params;
        const idPedido = Number(id);
        console.log("ID del pedido:", idPedido);

        const [pedido] = await pool.query(
            `SELECT 
                p.idPedido, 
                p.nameCliente, 
                p.fechaCreacion, 
                p.fechaEntrega, 
                p.direccion, 
                p.telefono,
                p.totalPagar,
                ip.idItemPedido, 
                ip.cantidad, 
                ip.total, 
                pr.idProducto, 
                pr.NombreProducto, 
                pr.Precio
            FROM Pedido p
            JOIN itemPedido ip ON p.idPedido = ip.idPedido
            JOIN Producto pr ON ip.idProducto = pr.idProducto
            WHERE p.idPedido = ?`, 
            [idPedido]
        );

        console.log("Resultado de la consulta:", pedido);
        if (pedido.length === 0) {
            return res.status(200).json({ 
                message: "El pedido existe, pero no tiene productos asociados", 
                pedido: { idPedido } 
            });
        }

        const pedidoFormateado = {
            idPedido: pedido[0].idPedido,
            nameCliente: pedido[0].nameCliente,
            fechaCreacion: pedido[0].fechaCreacion,
            fechaEntrega: pedido[0].fechaEntrega,
            direccion: pedido[0].direccion,
            telefono: pedido[0].telefono,
            productos: pedido.map(item => ({
                idItemPedido: item.idItemPedido,
                idProducto: item.idProducto,
                NombreProducto: item.NombreProducto,
                cantidad: item.cantidad,
                total: item.total,
                precio: item.Precio
            })),
            totalPagar: pedido[0].totalPagar
        };

        res.json(pedidoFormateado);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el pedido", detalles: error.message });
    }
};

const updatePedido = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombreCliente, fechaCreacion, fechaEntrega, direccionCliente, telefono, totalPagar } = req.body;
        
        const [result] = await pool.query(
            'UPDATE Pedido SET nombreCliente = ?, fechaCreacion = ?, fechaEntrega = ?, direccionCliente = ?, telefono = ?, totalPagar = ? WHERE idPedido = ?', 
            [nombreCliente, fechaCreacion, fechaEntrega, direccionCliente, telefono, totalPagar, id]
        );

        if (result.affectedRows > 0) {
            res.json({ mensaje: 'Pedido actualizado exitosamente' });
        } else {
            res.status(404).json({ mensaje: 'Pedido no encontrado' });
        }
    } catch (error) {
        res.status(500).json({
            error: 'Error al actualizar Pedido',
            detalles: error.message
        });
    }
};

const createPedido = async (req, res) => {
    try {
        const { nameCliente, fechaCreacion, fechaEntrega, direccion, telefono, totalPagar, items } = req.body;

        const [result] = await pool.query(
            "INSERT INTO Pedido (nameCliente, fechaCreacion, fechaEntrega, direccion, telefono, totalPagar) VALUES (?, ?, ?, ?, ?, ?)", 
            [nameCliente, fechaCreacion, fechaEntrega, direccion, telefono, totalPagar]
        );

        const idPedido = result.insertId;

        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: 'El pedido debe incluir al menos un item' });
        }

        for (let item of items) {
            const { idProducto, cantidad, total } = item;

            if (!idProducto || !cantidad || !total) {
                return res.status(400).json({ error: 'Los items deben tener idProducto, cantidad y total' });
            }

            await pool.query(
                "INSERT INTO ItemPedido (idPedido, idProducto, cantidad, total) VALUES (?, ?, ?, ?)",
                [idPedido, idProducto, cantidad, total]
            );
        }

        res.status(201).json({
            idPedido,
            mensaje: 'Pedido y items creados exitosamente'
        });
    } catch (error) {
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
        } else {
            res.json({ mensaje: 'Pedido eliminado exitosamente' });
        }
    } catch (error) {
        res.status(500).json({
            error: 'Error al eliminar Pedido',
            detalles: error.message
        });
    }
};

// ------------------------------------------------------------------------------------
const getAllItemPedido = async (req, res) => {
    try {
        const [itemPedido] = await pool.query('SELECT * FROM ItemPedido');
        res.json({
            data: itemPedido,  // La lista de items (puede ser [] si no hay registros)
            message: "test"    // Mensaje de prueba
        });
    } catch (error) {
        console.error("Error en getAllItemPedido:", error.message);
        res.status(500).json({
            error: 'Error al obtener listado de ItemPedido',
            detalles: error.message
        });
    }
};

const getItemPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const [itemPedido] = await pool.query('SELECT * FROM ItemPedido WHERE idItemPedido = ?', [id]);
        res.json(itemPedido);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener ItemPedido',
            detalles: error.message
        });
    }
};

const updateItemPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const { idPedido, idProducto, cantidad, total } = req.body;

        const [result] = await pool.query(
            'UPDATE ItemPedido SET idPedido = ?, idProducto = ?, cantidad = ?, total = ? WHERE idItemPedido = ?', 
            [idPedido, idProducto, cantidad, total, id]
        );

        if (result.affectedRows > 0) {
            res.json({ mensaje: 'ItemPedido actualizado exitosamente' });
        } else {
            res.status(404).json({ mensaje: 'ItemPedido no encontrado' });
        }
    } catch (error) {
        res.status(500).json({
            error: 'Error al actualizar ItemPedido',
            detalles: error.message
        });
    }
};

module.exports = {
    getAllPedidos,
    getPedido,
    updatePedido,
    createPedido,
    deletePedido,
    getAllItemPedido,
    getItemPedido,
    updateItemPedido
};
