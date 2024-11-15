const { pool } = require('../database/db');

const getUsuarios =  async (req, res) => {
        try {
            const [usuarios] = await pool.query('SELECT * FROM usuarios');
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({
                error: 'Error al obtener usuarios',
                detalles: error.message
            });
        }
    };


module.exports = getUsuarios;
