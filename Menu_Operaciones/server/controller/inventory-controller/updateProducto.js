const { pool } = require('../../database/db');

const updateProducto = async (req, res) => {
    try {
        const{id} = req.params;
        const{NombreProducto, Precio, Cantidad, Lote, FechaVencimiento} = req.body;

        const [result] = await pool.query(
            'UPDATE Producto SET NombreProducto = ?, Precio = ?, Cantidad = ?, Lote = ?, FechaVencimiento = ? WHERE IdProducto = ?',
            [NombreProducto, Precio, Cantidad, Lote, FechaVencimiento, id]
        );

        if (result.affectedRows > 0) {
            res.json({ mensaje: 'Producto actulizado exitosamente'});
        } else {
            res.status(404).json({mensaje: 'Usuario no encontrado'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al actualizar usuario',
            detalles: error.message
        })
    }
};

module.exports = updateProducto;