const { pool } = require("../../database/db");
const bcrypt = require("bcrypt");

// Login de usuario
async function loginUsuario(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email y contraseña son requeridos" });
    }

    try {
        // Verificar si el usuario existe
        const [user] = await pool.query(
            "SELECT u.*, r.IdRoles, r.NombreRol FROM Usuarios u " +
            "INNER JOIN RolesUsuarios ru ON u.IdUsuarios = ru.IdUsuarios " +
            "INNER JOIN Roles r ON ru.IdRoles = r.IdRoles " +
            "WHERE u.Email = ?", 
            [email]
        );

        if (user.length === 0) {
            return res.status(401).json({ message: "Credenciales inválidas de correo" });
        }

        console.log("Usuario encontrado:", user[0]);

        // Verificar contraseña
        const match = await bcrypt.compare(password, user[0].Contraseña_hash);
        if (!match) {
            return res.status(401).json({ message: "Credenciales inválidas de contraseña" });
        }

        // Registrar sesión
        await pool.query(
            "INSERT INTO Sesiones (IdUsuario, IdRolUsuario, FechaInicio, DireccionIP) VALUES (?, ?, NOW(), ?)",
            [user[0].IdUsuarios, user[0].IdRoles, req.ip]
        );

        res.json({
            message: "Inicio de sesión exitoso",
            user: {
                id: user[0].IdUsuarios,
                nombre: user[0].Nombre,
                email: user[0].Email,
                rol: user[0].NombreRol
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error en el servidor" });
    }
}

module.exports = {
    loginUsuario
};
