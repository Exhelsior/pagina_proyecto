const { pool } = require('../database/db');

const actualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre, Email, numeroDocumento } = req.body;

        const [result] = await pool.query(
            'UPDATE Usuarios SET Nombre = ?, Email = ?, numeroDocumento = ? WHERE IdUsuarios = ?',
            [Nombre, Email, numeroDocumento, id]
        );

        if (result.affectedRows > 0) {
            res.json({ mensaje: 'Usuario actualizado exitosamente' });
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar usuario' });
    }
};

module.exports = actualizarUsuario;