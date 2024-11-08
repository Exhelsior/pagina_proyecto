SELECT*FROM usuarios;

-- filtrar usuarios por su inicial de nombre --
SELECT * FROM usuarios
WHERE nombre LIKE ('P%');

-- identificar roles de los usuarios --
SELECT 
    u.IdUsuarios,
    u.Nombre,
    u.Email,
    u.tipoDocumento,
    u.numeroDocumento,
    r.NombreRol
FROM Usuarios u
JOIN RolesUsuarios ru ON u.IdUsuarios = ru.IdUsuarios
JOIN Roles r ON ru.IdRoles = r.IdRoles;

-- añadir un nuevo usuario y asignarle un rol --

INSERT INTO Usuarios (Contraseña_hash, Nombre, Email, tipoDocumento, numeroDocumento) 
VALUES ('$2y$10$HashedPassword6','Diego Pérez', 'diego@email.com', 'Pasaporte', '12345678');

INSERT INTO RolesUsuarios (IdUsuarios, IdRoles) 
VALUES (LAST_INSERT_ID(), 3);

-- borrar un dato en especifico --



