const { pool } = require('../../database/db');


const getInventory = async (req, res) => {
    try {
        const {id} = req.params;
        const [producto] = await pool.query('SELECT * FROM Producto WHERE Idproducto = ?', [id]);
        res.json(producto);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener Producto',
            detalles: error.message
        })
    }
}


module.exports = getInventory;
