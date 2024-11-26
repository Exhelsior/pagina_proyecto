const crypto = require('crypto');
const { pool } = require('../../database/db');

const generarToken = async (req, res) => {
    const { email } = req.body;
  
    // Validación de email
    if (!email) {
      return res.status(400).json({ 
        mensaje: "El email es requerido" 
      });
    }
  
  try {
    // Buscar usuario por email
    const [usuarios] = await pool.execute(
      "SELECT IdUsuarios, Email FROM Usuarios WHERE Email = ?",
      [email]
    );

    if (usuarios.length === 0) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    const usuario = usuarios[0];
    const token = crypto.randomBytes(20).toString("hex");
    const expiracion = new Date(Date.now() + 3600000);

    console.log('Datos para actualizar:', {
      token,
      expiracion,
      usuarioId: usuario.IdUsuarios
    });

    // Guardar token de recuperación
    await pool.execute(
      "UPDATE Usuarios SET reset_token = ?, reset_expira = ? WHERE IdUsuarios = ?",
      [token, expiracion, usuario.IdUsuarios]
    );

    res.status(200).json({
      mensaje: "Token de recuperación generado",
      token: token,
      expiracion: expiracion,
    });
  } catch (error) {
    console.error('Error completo:', error);
    res.status(500).json({
      mensaje: "Error en recuperación de contraseña",
      error: error.message,
    });
  }
};

module.exports = generarToken;