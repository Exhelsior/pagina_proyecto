const { pool } = require('../../database/db');

const crearUsuario = async (req, res) => {
    try {
         const { Contraseña_hash, Nombre, Email, tipoDocumento, numeroDocumento, FechaCreacion } = req.body;
        // const Contraseña_hash = 'hash_de_contraseña';
        // const Nombre = 'Juan Pérez';
        // const Email = 'juan.perez@example.com';
        // const tipoDocumento = 'CC';
        // const numeroDocumento = '1234567890';
        // const FechaCreacion = '2024-11-15';

        
        // Verificar si el email ya existe
        const [existeEmail] = await pool.query(
            'SELECT IdUsuarios FROM usuarios WHERE Email = ?',
            [Email]
        );

        if (existeEmail.length > 0) {
            return res.status(400).json({
                error: 'El email ya está registrado'
            });
        }

        // logica de insercion de usuarios
        const [result] = await pool.query(
            "INSERT INTO Usuarios (`Contraseña_hash`, `Nombre`, `Email`, `tipoDocumento`, `numeroDocumento`, `FechaCreacion`) VALUES (?, ?, ?, ?, ?, ?)",
            [Contraseña_hash, Nombre, Email, tipoDocumento, numeroDocumento, FechaCreacion]
        );

        res.status(201).json({
            id: result.insertId,
            mensaje: 'Usuario creado exitosamente'
        });
    } catch (error) {
        console.error('Error en crear usuario:', error);
        res.status(500).json({
            error: 'Error al crear usuario',
            detalles: error.message
        });
    }
};

module.exports = crearUsuario;