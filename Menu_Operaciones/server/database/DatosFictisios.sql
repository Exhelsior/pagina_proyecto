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

INSERT INTO Producto (NombreProducto, Precio, Cantidad, Lote, FechaVencimiento) VALUES
('Pan de molde', 2.50, 100, '2024-02-15', '2024-03-10'),
('Croissant', 1.20, 200, '2024-02-16', '2024-02-25'),
('Baguette', 1.80, 150, '2024-02-14', '2024-02-22'),
('Pan integral', 2.80, 120, '2024-02-13', '2024-03-05'),
('Donut', 1.50, 250, '2024-02-17', '2024-02-28');

INSERT INTO Pedido (Cantidad, PrecioUnitario, Total) VALUES
(10, 2.50, 25.00),
(5, 1.20, 6.00),
(8, 1.80, 14.40),
(6, 2.80, 16.80),
(12, 1.50, 18.00);

INSERT INTO EstadoPedidos (IdPedidos, FechaPedido, EstadoPedido, Total) VALUES
(1, '2024-02-18 10:00:00', 'En proceso', 25.00),
(2, '2024-02-18 11:00:00', 'Completado', 6.00),
(3, '2024-02-19 09:30:00', 'Pendiente', 14.40),
(4, '2024-02-19 12:15:00', 'Cancelado', 16.80),
(5, '2024-02-20 14:45:00', 'Entregado', 18.00);

INSERT INTO Envios (IdPedidos, DireccionEnvio, FechaEnvio, EstadoEnvio, Comentarios) VALUES
(1, 'Calle Mayor 10, Madrid', '2024-02-18 15:00:00', 'En camino', 'Entrega rápida solicitada'),
(2, 'Avenida Libertad 25, Barcelona', '2024-02-18 16:30:00', 'Entregado', 'Entregado sin incidencias'),
(3, 'Calle San Juan 8, Valencia', '2024-02-19 10:00:00', 'Pendiente', 'Esperando confirmación'),
(4, 'Plaza España 5, Sevilla', '2024-02-19 13:00:00', 'Cancelado', 'Cliente canceló el pedido'),
(5, 'Calle Real 12, Bilbao', '2024-02-20 17:00:00', 'En camino', 'Requiere firma al recibir');

INSERT INTO ItemPedidos (IdProducto, IdPedidos, cantidad, precio) VALUES
(1, 1, 10, 2.50),
(2, 2, 5, 1.20),
(3, 3, 8, 1.80),
(4, 4, 6, 2.80),
(5, 5, 12, 1.50);
