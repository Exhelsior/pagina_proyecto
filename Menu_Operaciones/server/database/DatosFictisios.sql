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

INSERT INTO RolesUsuarios (IdUsuarios, IdRoles) VALUES 
(8, 1), 
(9, 2),  
(10, 3),  
(11, 4), 
(12, 2);

-- Iinsertar ejemplo de datos de sesiones
INSERT INTO Sesiones (IdUsuario, IdRolUsuario, FechaInicio, FechaFin, DireccionIP, Dispositivo) VALUES 
(8, 1, '2024-01-15 09:30:00', '2024-01-15 17:45:00', '192.168.1.100', 'Windows 11 - Chrome'),
(9, 2,'2024-01-16 08:15:00', '2024-01-16 16:20:00', '192.168.1.101', 'MacOS - Safari'),
(10, 3,'2024-01-17 10:00:00', '2024-01-17 18:30:00', '192.168.1.102', 'Linux - Firefox'),
(11, 4,'2024-01-17 10:00:00', '2024-01-17 18:30:00', '192.168.1.102', 'Linux - Firefox'),
(12, 2,'2024-01-18 14:45:00', '2024-01-18 15:30:00', '192.168.1.103', 'iOS - Mobile Safari');

INSERT INTO Producto (NombreProducto, Precio, Cantidad, Lote, FechaVencimiento) VALUES
('Pan Francés', 1500.00, 100, '2025-04-10', '2025-04-10'),
('Pan de Maíz', 2000.00, 50, '2025-04-10', '2025-04-12'),
('Croissant', 2500.00, 30, '2025-04-10', '2025-04-15'),
('Pan Integral', 1800.00, 80, '2025-04-10', '2025-04-20'),
('Pan de Chocolate', 2200.00, 60, '2025-04-10', '2025-04-18');

INSERT INTO Pedido (nameCliente, fechaCreacion, fechaEntrega, direccion, telefono) VALUES
('Carlos Gómez', '2025-03-01', '2025-03-02', 'Calle 123, Bogotá', '3123456789'),
('Ana Pérez', '2025-03-02', '2025-03-03', 'Carrera 45, Medellín', '3159876543'),
('Luis Ramírez', '2025-03-03', '2025-03-04', 'Av. Central 77, Cali', '3226549871'),
('María Torres', '2025-03-04', '2025-03-05', 'Cll 50, Barranquilla', '3004567891'),
('Jorge Martínez', '2025-03-05', '2025-03-06', 'Cra 10 #20, Cartagena', '3012345678');

INSERT INTO itemPedido (idPedido, idProducto, cantidad, total) VALUES
(1, 1, 5, 7500.00),
(1, 3, 2, 5000.00),
(2, 2, 3, 6000.00),
(3, 4, 4, 7200.00),
(4, 5, 2, 4400.00);

INSERT INTO Envios (idPedido, fechaEnvio, estado) VALUES
(1, '2025-03-01', 'enviado'),
(2, '2025-03-02', 'enviado'),
(3, '2025-03-03', 'enviado'),
(4, '2025-03-04', 'enviado'),
(5, '2025-03-05', 'enviado');
