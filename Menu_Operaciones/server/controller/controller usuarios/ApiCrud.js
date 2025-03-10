const { pool } = require("../../database/db");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

// Login de usuario
async function loginUsuario(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email y contraseña son requeridos" });
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
      return res
        .status(401)
        .json({ message: "Correo electrónico no encontrado" });
    }

    console.log("Usuario encontrado:", user[0]);

    // Verificar contraseña
    const match = await bcrypt.compare(password, user[0].Contraseña_hash);
    if (!match) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Registrar sesión
    await pool.query(
      "INSERT INTO Sesiones (IdUsuario, IdRolUsuario, FechaInicio, DireccionIP) VALUES (?, ?, NOW(), ?)",
      [user[0].IdUsuarios, user[0].IdRoles, req.ip]
    );

    res.json({
      success: true,
      message: "Inicio de sesión exitoso",
      user: {
        id: user[0].IdUsuarios,
        nombre: user[0].Nombre,
        email: user[0].Email,
        rol: user[0].NombreRol,
      },
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error en el servidor" });
  }
}

const tokenController = {
  generateToken: async (req, res) => {
    const { email } = req.body;
    try {
      // Verify if email exists in database
      const [user] = await pool.query(
        "SELECT * FROM usuarios WHERE Email = ?",
        [email]
      );

      if (user.length === 0) {
        return res.status(404).json({
          success: false,
          alert: "Email no encontrado",
        });
      }

      // Generate token
      const token = Math.random().toString(36).substring(2, 12);

      // Email configuration
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Usar TLS
        auth: {
          user: "masterbreadBogota@gmail.com",
          pass: "wimg qvug bdmi ykkd",
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Token de Recuperación de Contraseña",
        html: `
                    <h1>Token de Recuperación</h1>
                    <p>Su token de recuperación es: ${token}</p>
                    <p>Este token expirará en 1 hora.</p>
                    <img src="https://gifdb.com/images/high/duck-animated-walk-8o2meryz72l6b00p.gif" alt="Duck walk" width="100px" height="100px">
                    <p>Por favor, no responda a este correo.</p>
                `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      // Store token in database
      await pool.query("UPDATE usuarios SET reset_token = ? WHERE email = ?", [
        token,
        email,
      ]);

      res.json({
        success: true,
        alert: "Token enviado exitosamente",
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        success: false,
        message: "Error al generar el token",
      });
    }
  },
};

const newPasswordController = {
  updatePassword: async (req, res) => {
    const { recoveryToken, newPassword } = req.body;

    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        alert: "La contraseña debe tener al menos 6 caracteres",
      });
    }

    try {
      // Verify if token exists in database
      const [user] = await pool.query(
        "SELECT * FROM usuarios WHERE reset_token = ?",
        [recoveryToken]
      );

      if (user.length === 0) {
        return res.status(404).json({
          success: false,
          alert: "Token inválido o expirado",
        });
      }

      // Check if token exists (already verified by the database query above)
      if (!recoveryToken) {
        return res.status(401).json({
          success: false,
          alert: "Token no proporcionado",
        });
      }

      // Hash new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update password and clear reset token
      await pool.query(
        "UPDATE Usuarios SET Contraseña_hash = ?, reset_token = NULL WHERE reset_token = ?",
        [hashedPassword, recoveryToken]
      );

      res.json({
        success: true,
        alert: "Contraseña actualizada exitosamente",
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        success: false,
        alert: "Error al actualizar la contraseña",
      });
    }
  },
};

module.exports = {
  loginUsuario,
  tokenController,
  newPasswordController,
};
