USE masterBread;

-- Insert sample roles
INSERT INTO roles (NombreRol) VALUES 
('ADMINISTRADOR'),
('JEFE DE INVENTARIO'),
('DESPACHADOR'),
('REPARTIDOR');


-- insertar ejemplos de usuarios
INSERT INTO Usuarios (Contraseña_hash, Nombre,Email, tipoDocumento, numeroDocumento) VALUES 
('$2y$10$HashedPassword1', 'Juan Pérez',  'juan.perez@masterbread.com', 'Cédula', '100356987'),
('$2y$10$HashedPassword2', 'María González', 'maria.gonzalez@masterbread.com', 'Pasaporte', '107456321'),
('$2y$10$HashedPassword3', 'Carlos Rodríguez',  'carlos.rodriguez@masterbread.com', 'Cédula', '14478536'),
('$2y$10$HashedPassword4', 'Ana Martínez',  'ana.martinez@masterbread.com', 'Documento Nacional', '10336974'),
('$2y$10$HashedPassword5', 'Pedro Perez',  'pedro.perez@masterbread.com', 'Documento Nacional', '14523068');

-- asignar roles
INSERT INTO RolesUsuarios (IdUsuarios, IdRoles) VALUES 
(1, 1), 
(2, 2),  
(3, 3),  
(4, 4), 
(5, 2);


-- Iinsertar ejemplo de datos de sesiones
INSERT INTO Sesiones (IdUsuario, IdRolUsuario, FechaInicio, FechaFin, DireccionIP, Dispositivo) VALUES 
(1, 1, '2024-01-15 09:30:00', '2024-01-15 17:45:00', '192.168.1.100', 'Windows 11 - Chrome'),
(2, 2,'2024-01-16 08:15:00', '2024-01-16 16:20:00', '192.168.1.101', 'MacOS - Safari'),
(3, 3,'2024-01-17 10:00:00', '2024-01-17 18:30:00', '192.168.1.102', 'Linux - Firefox'),
(4, 4,'2024-01-18 14:45:00', '2024-01-18 15:30:00', '192.168.1.103', 'iOS - Mobile Safari');