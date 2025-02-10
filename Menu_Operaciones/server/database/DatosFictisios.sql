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

INSERT INTO Clientes (IdCliente, NombreCompleto, Telefono, DireccionPrincipal) VALUES
    (1, 'Carlos Pérez', '555-1234', 'Calle Principal #123'),
    (2, 'Ana López', '555-5678', 'Avenida Central #456'),
    (3, 'Luis Gómez', '555-7890', 'Boulevard Oeste #789'),
    (4, 'María Rodríguez', '555-2468', 'Calle Segunda #102'),
    (5, 'Sofía Morales', '555-1357', 'Avenida Este #325'),
    (6, 'Andrés Torres', '555-8642', 'Calle Sur #456'),
    (7, 'Paula Díaz', '555-7531', 'Plaza Norte #678'),
    (8, 'Miguel Herrera', '555-9513', 'Colonia Verde #809'),
    (9, 'Elena Vargas', '555-8524', 'Sector Azul #342'),
    (10, 'Juan Castillo', '555-9637', 'Paseo del Río #12');

INSERT INTO Producto (IdProducto, NombreProducto, Precio, Cantidad, Lote, FechaVencimiento) VALUES
    (1, 'Pan Integral', 1.50, 100, '2024-01-01', '2024-01-15'),
    (2, 'Croissant', 2.00, 50, '2024-01-02', '2024-01-10'),
    (3, 'Donas Glaseadas', 1.20, 30, '2024-01-03', '2024-01-12'),
    (4, 'Baguette', 1.80, 40, '2024-01-04', '2024-01-20'),
    (5, 'Empanada de Carne', 2.50, 60, '2024-01-05', '2024-01-18'),
    (6, 'Pan de Queso', 1.70, 80, '2024-01-06', '2024-01-14'),
    (7, 'Galletas de Chocolate', 0.90, 150, '2024-01-07', '2024-01-25'),
    (8, 'Pastel de Zanahoria', 15.00, 10, '2024-01-08', '2024-01-22'),
    (9, 'Churros', 1.10, 70, '2024-01-09', '2024-01-19'),
    (10, 'Pan de Molde', 2.20, 200, '2024-01-10', '2024-01-30');

INSERT INTO Pedido (IdPedido, IdCliente, Cantidad, PrecioUnitario, Total) VALUES
    (1, 1, 10, 1.50, 15.00),
    (2, 2, 10, 2.00, 20.00),
    (3, 3, 10, 1.25, 12.50),
    (4, 4, 10, 1.00, 10.00),
    (5, 5, 10, 2.50, 25.00),
    (6, 6, 10, 3.00, 30.00),
    (7, 7, 10, 1.80, 18.00),
    (8, 8, 10, 2.20, 22.00),
    (9, 9, 10, 3.50, 35.00),
    (10, 10, 10, 2.80, 28.00);
    

    
INSERT INTO EstadoPedidos (IdEstado, IdPedidos, IdCliente, FechaPedido, EstadoPedido, Total) VALUES
    (1, 1, 1, '2024-01-10 08:00:00', 'Pendiente', 15.00),
    (2, 2, 2, '2024-01-10 09:00:00', 'Completado', 20.00),
    (3, 3, 3, '2024-01-10 10:00:00', 'En Proceso', 12.50),
    (4, 4, 4, '2024-01-10 11:00:00', 'Cancelado', 10.00),
    (5, 5, 5, '2024-01-10 12:00:00', 'Pendiente', 25.00),
    (6, 6, 6, '2024-01-10 13:00:00', 'Completado', 30.00),
    (7, 7, 7, '2024-01-10 14:00:00', 'En Proceso', 18.00),
    (8, 8, 8, '2024-01-10 15:00:00', 'Pendiente', 22.00),
    (9, 9, 9, '2024-01-10 16:00:00', 'Completado', 35.00),
    (10, 10, 10, '2024-01-10 17:00:00', 'Cancelado', 28.00);

INSERT INTO Envios (IdEnvio, IdPedidos, DireccionEnvio, FechaEnvio, EstadoEnvio, Comentarios) VALUES
    (1, 1, 'Calle Principal #123', '2024-01-11 08:00:00', 'En Camino', 'Entregar a las 9 AM'),
    (2, 2, 'Avenida Central #456', '2024-01-11 09:30:00', 'Entregado', ''),
    (3, 3, 'Boulevard Oeste #789', '2024-01-11 10:15:00', 'Cancelado', 'Cliente no disponible'),
    (4, 4, 'Calle Segunda #102', '2024-01-11 11:00:00', 'Pendiente', ''),
    (5, 5, 'Avenida Este #325', '2024-01-11 12:00:00', 'En Camino', 'Confirmar dirección'),
    (6, 6, 'Calle Sur #456', '2024-01-11 13:30:00', 'Entregado', ''),
    (7, 7, 'Plaza Norte #678', '2024-01-11 14:45:00', 'Pendiente', 'Problemas de tráfico'),
    (8, 8, 'Colonia Verde #809', '2024-01-11 15:30:00', 'Entregado', ''),
    (9, 9, 'Sector Azul #342', '2024-01-11 16:15:00', 'En Camino', ''),
    (10, 10, 'Paseo del Río #12', '2024-01-11 17:00:00', 'Cancelado', 'Cliente canceló el pedido');

INSERT INTO ItemPedidos (IdProducto, IdPedidos, Cantidad, Precio) VALUES
    (1, 1, 10, 1.50),
    (2, 2, 10, 2.00),
    (3, 3, 10, 1.20),
    (4, 4, 10, 1.80),
    (5, 5, 10, 2.50),
    (6, 6, 10, 1.70),
    (7, 7, 10, 0.90),
    (8, 8, 10, 15.00),
    (9, 9, 10, 1.10),
    (10, 10, 10, 2.20);

INSERT INTO Insumos (IdInsumo, Nombre, FehcaIngreso, FechaVencimiento, Cantidad) VALUES
    (1, 'Harina', '2024-01-01', '2024-03-01', 100.0),
    (2, 'Levadura', '2024-01-02', '2024-02-15', 50.0),
    (3, 'Azúcar', '2024-01-03', '2024-03-15', 80.0),
    (4, 'Huevos', '2024-01-04', '2024-01-20', 200.0),
    (5, 'Leche', '2024-01-05', '2024-01-25', 60.0),
    (6, 'Mantequilla', '2024-01-06', '2024-02-10', 40.0),
    (7, 'Chocolate', '2024-01-07', '2024-03-01', 30.0),
    (8, 'Canela', '2024-01-08', '2024-05-01', 15.0),
    (9, 'Fruta Confitada', '2024-01-09', '2024-04-01', 25.0),
    (10, 'Queso', '2024-01-10', '2024-01-30', 50.0);