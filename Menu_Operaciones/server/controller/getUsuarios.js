const { pool } = require('../database/db');

const getUsuarios =  async (req, res) => {
        try {
            const { id } = req.params;
            const [usuarios] = await pool.query('SELECT * FROM usuarios  WHERE IdUsuarios = ?', [id]);
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({
                error: 'Error al obtener usuarios',
                detalles: error.message
            });
        }
    };


module.exports = getUsuarios;
