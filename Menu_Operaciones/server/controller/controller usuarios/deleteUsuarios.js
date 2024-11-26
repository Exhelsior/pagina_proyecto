// controllers/usuarioControllers/deleteUsuario.js
const { pool } = require('../../database/db');

const deleteUsuario = async (req, res) => {
        try {
            const { id } = req.params;

            const [result] = await pool.query(
                'DELETE FROM usuarios WHERE IdUsuarios = ?',
                [id]
            );

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    error: 'Usuario no encontrado'
                });
            }

            res.json({
                mensaje: 'Usuario eliminado exitosamente'
            });
        } catch (error) {
            res.status(500).json({
                error: 'Error al eliminar usuario',
                detalles: error.message
            });
        }
    };


module.exports = deleteUsuario;