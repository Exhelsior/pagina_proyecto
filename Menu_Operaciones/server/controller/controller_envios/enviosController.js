const { pool } = require('../../database/db');

const getAllEnvios = async (req, res) => {
    try {
        const [envios] = await pool.query(`
            SELECT 
                envios.IdEnvio, 
                envios.fechaEnvio, 
                envios.estado, 
                pedido.nameCliente 
            FROM envios
            INNER JOIN pedido ON envios.idPedido = pedido.idPedido
        `);

        res.json(envios); // devuelve [] si no hay registros

    } catch (error) {
        res.status(500).json({
            error: "Error al obtener los envíos",
            detalles: error.message
        });
    }
};


const getEnvio = async (req, res) => {
    try {
        const { id } = req.params;
        
        const [envio] = await pool.query(`
            SELECT 
                envios.IdEnvio, 
                envios.fechaEnvio, 
                envios.estado, 
                pedido.nameCliente 
            FROM envios
            INNER JOIN pedido ON envios.idPedido = pedido.idPedido
            WHERE envios.IdEnvio = ?`, 
            [id]
        );

        if (envio.length === 0) {
            return res.status(404).json({ error: "Envío no encontrado" });
        }

        res.json(envio[0]); // Devolver solo el objeto en lugar de un array

    } catch (error) {
        res.status(500).json({
            error: "Error al obtener el envío",
            detalles: error.message
        });
    }
};

const updateEnvio = async (req, res) => {
    try {
        const{id} = req.params;
        const { idPedido, fechaEnvio, estado } = req.body;

        const [result] = await pool.query(
            'UPDATE envios SET idPedido = ?, fechaEnvio = ?, estado = ? WHERE IdEnvio = ?',
            [idPedido, fechaEnvio, estado, id]
        );

        if (result.affectedRows > 0) {
            res.json({mensaje: 'Envio actualizado correctamente'});
        }
    } catch (error){
        console.error(error);
        res.status(500).json({
            error: 'Error al actualizar envio',
            detalles: error.message
        })
    }
};

const createEnvio = async (req, res) => {
    try {
        const { id } = req.params; 
        const { fechaEnvio, estado } = req.body;
        const idPedido = parseInt(id, 10); 

        // Verificar si el pedido existe
        const [pedido] = await pool.query("SELECT * FROM pedido WHERE idPedido = ?", [idPedido]);

        if (!pedido || pedido.length === 0) {
            return res.status(404).json({ error: "Pedido no encontrado" });
        }

        // Verificar si el pedido ya tiene un registro en envíos
        const [envioExistente] = await pool.query("SELECT * FROM envios WHERE idPedido = ?", [idPedido]);

        if (envioExistente.length > 0) {
            // Si ya existe, actualizar estado
            await pool.query("UPDATE envios SET fechaEnvio = ?, estado = ? WHERE idPedido = ?", [fechaEnvio, estado, idPedido]);

            return res.status(200).json({
                mensaje: "Estado de envío actualizado exitosamente",
                accion: "actualizado"
            });
        }

        // Insertar un nuevo registro en envíos
        const [result] = await pool.query(
            "INSERT INTO envios (`idPedido`, `fechaEnvio`, `estado`) VALUES (?, ?, ?)",
            [idPedido, fechaEnvio, estado]
        );

        res.status(201).json({
            id: result.insertId,
            mensaje: "Envío creado exitosamente",
            accion: "creado"
        });

    } catch (error) {
        console.error("Error al crear envío", error);
        res.status(500).json({
            error: "Error al crear envío",
            detalles: error.message
        });
    }
};

const deleteEnvio = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await pool.query("DELETE FROM envios WHERE IdEnvio = ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Envío no encontrado" });
        }

        res.json({ mensaje: "Envío eliminado exitosamente" });

    } catch (error) {
        console.error("Error al eliminar envío", error);
        res.status(500).json({
            error: "Error al eliminar envío",
            detalles: error.message
        });
    }
};


module.exports = {
    getAllEnvios,
    getEnvio,
    updateEnvio,
    createEnvio,
    deleteEnvio
}