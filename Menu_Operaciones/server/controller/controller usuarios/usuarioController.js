const { pool } = require("../../database/db");
const crypto = require("crypto");

const actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { Nombre, Email, numeroDocumento } = req.body;

    const [result] = await pool.query(
      "UPDATE Usuarios SET Nombre = ?, Email = ?, numeroDocumento = ? WHERE IdUsuarios = ?",
      [Nombre, Email, numeroDocumento, id]
    );

    if (result.affectedRows > 0) {
      res.json({ mensaje: "Usuario actualizado exitosamente" });
    } else {
      res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
};

const generarToken = async (req, res) => {
  const { email } = req.body;

  // Validación de email
  if (!email) {
    return res.status(400).json({
      mensaje: "El email es requerido",
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

    console.log("Datos para actualizar:", {
      token,
      expiracion,
      usuarioId: usuario.IdUsuarios,
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
    console.error("Error completo:", error);
    res.status(500).json({
      mensaje: "Error en recuperación de contraseña",
      error: error.message,
    });
  }
};

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
        mensaje: "Token inválido o expirado",
      });
    }

    const usuario = usuarios[0];

    // Generar nuevo hash de contraseña
    const nuevoHash = crypto
      .createHash("sha256")
      .update(nuevaContrasena)
      .digest("hex");

    // Actualizar contraseña y limpiar token
    await pool.execute(
      "UPDATE Usuarios SET Contraseña_hash = ?, reset_token = NULL, reset_expira = NULL WHERE IdUsuarios = ?",
      [nuevoHash, usuario.IdUsuarios]
    );

    res.status(200).json({
      mensaje: "Contraseña actualizada exitosamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al resetear contraseña",
      error: error.message,
    });
  }
};

const crearUsuario = async (req, res) => {
<<<<<<< HEAD
  try {
    const {
      Contraseña_hash,
      Nombre,
      Email,
      tipoDocumento,
      numeroDocumento,
      FechaCreacion,
    } = req.body;
    // const Contraseña_hash = 'hash_de_contraseña';
    // const Nombre = 'Juan Pérez';
    // const Email = 'juan.perez@example.com';
    // const tipoDocumento = 'CC';
    // const numeroDocumento = '1234567890';
    // const FechaCreacion = '2024-11-15';

    // Verificar si el email ya existe
    const [existeEmail] = await pool.query(
      "SELECT IdUsuarios FROM usuarios WHERE Email = ?",
      [Email]
    );
=======
    try {
         const { Contraseña_hash, Nombre, Email, tipoDocumento, numeroDocumento, FechaCreacion } = req.body;
        
        // Verificar si el email ya existe
        const [existeEmail] = await pool.query(
            'SELECT IdUsuarios FROM usuarios WHERE Email = ?',
            [Email]
        );
>>>>>>> cdf6166b57c25a6b7c166ab95d528e4f185b6293

    if (existeEmail.length > 0) {
      return res.status(400).json({
        error: "El email ya está registrado",
      });
    }

    // logica de insercion de usuarios
    const [result] = await pool.query(
      "INSERT INTO Usuarios (`Contraseña_hash`, `Nombre`, `Email`, `tipoDocumento`, `numeroDocumento`, `FechaCreacion`) VALUES (?, ?, ?, ?, ?, ?)",
      [
        Contraseña_hash,
        Nombre,
        Email,
        tipoDocumento,
        numeroDocumento,
        FechaCreacion,
      ]
    );

    res.status(201).json({
      id: result.insertId,
      mensaje: "Usuario creado exitosamente",
    });
  } catch (error) {
    console.error("Error en crear usuario:", error);
    res.status(500).json({
      error: "Error al crear usuario",
      detalles: error.message,
    });
  }
};

<<<<<<< HEAD
const getUsuarios = async (req, res) => {
  try {
    const { id } = req.params;
    const [usuarios] = await pool.query(
      "SELECT * FROM usuarios  WHERE IdUsuarios = ?",
      [id]
    );
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener usuarios",
      detalles: error.message,
    });
  }
};
=======
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
>>>>>>> cdf6166b57c25a6b7c166ab95d528e4f185b6293

const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query(
      "DELETE FROM usuarios WHERE IdUsuarios = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: "Usuario no encontrado",
      });
    }

    res.json({
      mensaje: "Usuario eliminado exitosamente",
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar usuario",
      detalles: error.message,
    });
  }
};

module.exports = {
  actualizarUsuario,
  generarToken,
  resetPassword,
  crearUsuario,
  getUsuarios,
  deleteUsuario,
};
