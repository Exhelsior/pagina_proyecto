const { pool } = require('../database/db');
const crypto = require('crypto');

const resetPassword = async (req, res) => {
  const { token, nuevaContrasena } = req.body;

  try {
    // Buscar usuario con token válido y no expirado
    const [usuarios] = await pool.execute(
      "SELECT IdUsuarios FROM Usuarios WHERE reset_token = ? AND reset_expira > NOW()",
      [token]
    );

    if (usuarios.length === 0) {
      return res.status(400).json({ 
        mensaje: "Token inválido o expirado" 
      });
    }

    const usuario = usuarios[0];
    
    // Generar nuevo hash de contraseña
    const nuevoHash = crypto.createHash('sha256')
      .update(nuevaContrasena)
      .digest('hex');

    // Actualizar contraseña y limpiar token
    await pool.execute(
      "UPDATE Usuarios SET Contraseña_hash = ?, reset_token = NULL, reset_expira = NULL WHERE IdUsuarios = ?",
      [nuevoHash, usuario.IdUsuarios]
    );

    res.status(200).json({ 
      mensaje: "Contraseña actualizada exitosamente" 
    });

  } catch (error) {
    res.status(500).json({
      mensaje: "Error al resetear contraseña",
      error: error.message
    });
  }
};

module.exports = resetPassword;