/**
 * Creado el 26 de noviembre del 2024
 * Funcion: diversos controladores para el manejo del CRUD para los usuarios
 */
const { pool } = require("../../database/db");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const saltRounds = 10;

//update
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

//token
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

//recovery
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
    const nuevoHash = await bcrypt.hash(nuevaContrasena, 10);

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

//create
const crearUsuario = async (req, res) => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const {
      Contraseña_hash,
      Nombre,
      Email,
      tipoDocumento,
      numeroDocumento,
      FechaCreacion,
      IdRol,
    } = req.body;

    // Hash the password using bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(Contraseña_hash, saltRounds);

    const [existeEmail] = await connection.query(
      "SELECT IdUsuarios FROM Usuarios WHERE Email = ?",
      [Email]
    );

    if (existeEmail.length > 0) {
      await connection.rollback();
      return res.status(400).json({
        error: "El email ya está registrado",
      });
    }

    const [userResult] = await connection.query(
      "INSERT INTO Usuarios (`Contraseña_hash`, `Nombre`, `Email`, `tipoDocumento`, `numeroDocumento`, `FechaCreacion`) VALUES (?, ?, ?, ?, ?, ?)",
      [
        hashedPassword,
        Nombre,
        Email,
        tipoDocumento,
        numeroDocumento,
        FechaCreacion,
      ]
    );

    const newUserId = userResult.insertId;

    await connection.query(
      "INSERT INTO RolesUsuarios (`IdUsuarios`, `IdRoles`) VALUES (?, ?)",
      [newUserId, IdRol]
    );

    await connection.commit();

    res.status(201).json({
      id: newUserId,
      mensaje: "Usuario creado y rol asignado exitosamente",
    });
  } catch (error) {
    await connection.rollback();
    console.error("Error en crear usuario:", error);
    res.status(500).json({
      error: "Error al crear usuario",
      detalles: error.message,
    });
  } finally {
    connection.release();
  }
};

//get
const getUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const [usuarios] = await pool.query(
      "SELECT * FROM usuarios WHERE IdUsuarios = ?",
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

//get roles
const getRoles = async (req, res) => {
  try {
    const [usuarios] = await pool.query(
      "SELECT R.IdUsuarios, U.Nombre AS NombreUsuario, RL.NombreRol AS NombreRol, R.IdRoles FROM RolesUsuarios AS R JOIN Usuarios AS U ON R.IdUsuarios = U.IdUsuarios JOIN Roles AS RL ON R.IdRoles = RL.IdRoles;"
    );
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener roles",
      detalles: error.message,
    });
  }
};

//delete
const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.body;

    const [result] = await pool.query(
      "DELETE FROM Usuarios WHERE IdUsuarios = ?",
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
  getUsuario,
  deleteUsuario,
  getRoles,
};
