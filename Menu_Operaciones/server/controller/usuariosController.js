const db = require("../database/db.js");

exports.getUsers = async (req, res) => {
  try {
    // Usar la conexión con promesas
    const [users, _] = await db
      .promise()
      .query(
        "SELECT u.IdUsuarios,u.Nombre,u.Email,u.tipoDocumento,u.numeroDocumento,r.NombreRol FROM Usuarios as u JOIN RolesUsuarios as ru ON u.IdUsuarios = ru.IdUsuarios JOIN Roles as r ON ru.IdRoles = r.IdRoles;"
      );
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};
