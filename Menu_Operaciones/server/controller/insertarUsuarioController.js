/**
 * IMPORTANTE:
 * RECOMIENDO SIEMPRE CAMBIAR LOS DATOS A INGRESAR
 * ESTOS PUEDEN CAUSAR PROBLEMAS CON MOSTRAR LOS NUEVOS DATOS EN LA BASE DE DATOS
 *
 */

const db = require("../database/db.js");

exports.createUser = async (req, res) => {
  try {
    // Datos del nuevo usuario
    const newUser = {
      Contraseña_hash: "c0d3h4sh",
      Nombre: "carlitos jose",
      Email: "carlitox@example.com",
      tipoDocumento: "CC",
      numeroDocumento: "14369825",
      FechaCreacion: new Date().toISOString().slice(0, 19).replace("T", " "),
    };

    const roleId = 2;

    // Insertar usuario en la tabla Usuarios
    const [result] = await db
      .promise()
      .query(
        "INSERT INTO Usuarios (`Contraseña_hash`, `Nombre`, `Email`, `tipoDocumento`, `numeroDocumento`, `FechaCreacion`) VALUES (?, ?, ?, ?, ?, ?)",
        [
          newUser.Contraseña_hash,
          newUser.Nombre,
          newUser.Email,
          newUser.tipoDocumento,
          newUser.numeroDocumento,
          newUser.FechaCreacion,
        ]
      );

    const userId = result.insertId;

    // Insertar la relación entre el usuario y su rol en RolesUsuarios
    await db
      .promise()
      .query(
        "INSERT INTO RolesUsuarios (`IdUsuarios`, `IdRoles`) VALUES (?, ?)",
        [userId, roleId]
      );

    res.status(201).json({ id: userId, ...newUser, roleId });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error al crear el usuario o asignar el rol" });
  }
};
