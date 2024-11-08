USE masterbread;

-- Deshabilitar la verificación de llaves foráneas:
   SET FOREIGN_KEY_CHECKS = 0;

-- Eliminar la tabla `Sesiones` primero, ya que tiene llaves foráneas:
   DROP TABLE IF EXISTS Sesiones;

-- Eliminar la tabla `RolesUsuarios`, que también tiene llaves foráneas:
   DROP TABLE IF EXISTS RolesUsuarios;

-- Eliminar la tabla `Usuarios`, que es la tabla referenciada por las otras tablas:
   DROP TABLE IF EXISTS Usuarios; 

-- Eliminar la tabla `Roles`, que no tiene dependencias:
   DROP TABLE IF EXISTS Roles;

-- Habilitar nuevamente la verificación de llaves foráneas:
   SET FOREIGN_KEY_CHECKS = 1;



-- Tabla Roles 
CREATE TABLE `Roles` (
  `IdRoles` int PRIMARY KEY AUTO_INCREMENT,
  `NombreRol` varchar(100) NOT NULL UNIQUE
);

-- Tabla Usuarios 
CREATE TABLE `Usuarios` (
  `IdUsuarios` int PRIMARY KEY AUTO_INCREMENT,
  `Contraseña_hash` varchar(255) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL UNIQUE,
  `tipoDocumento` varchar(50) NOT NULL,
  `numeroDocumento` varchar(50) NOT NULL UNIQUE,
  `FechaCreacion` timestamp DEFAULT CURRENT_TIMESTAMP
);

-- Tabla RolesUsuarios 
CREATE TABLE `RolesUsuarios` (
  `IdRolUsuario` int PRIMARY KEY AUTO_INCREMENT,
  `IdUsuarios` int NOT NULL,
  `IdRoles` int NOT NULL,
  UNIQUE KEY `uq_usuario_rol` (`IdUsuarios`, `IdRoles`),
  FOREIGN KEY (`IdUsuarios`) REFERENCES `Usuarios` (`IdUsuarios`) ON DELETE CASCADE,
  FOREIGN KEY (`IdRoles`) REFERENCES `Roles` (`IdRoles`) ON DELETE CASCADE
);

-- Tabla Sesiones 
CREATE TABLE `Sesiones` (
  `IdSesion` int PRIMARY KEY AUTO_INCREMENT,
  `IdUsuario` int NOT NULL,
  `IdRolUsuario` int NOT NULL,
  `FechaInicio` datetime NOT NULL,
  `FechaFin` datetime,
  `DireccionIP` varchar(45),
  `Dispositivo` varchar(255),
  FOREIGN KEY (`IdRolUsuario`) REFERENCES `RolesUsuarios` (`IdRolUsuario`) ON DELETE CASCADE,
  FOREIGN KEY (`IdUsuario`) REFERENCES `Usuarios` (`IdUsuarios`) ON DELETE CASCADE
);

-- Índices
CREATE INDEX `idx_usuarios_email` ON `Usuarios` (`Email`);
CREATE INDEX `idx_usuarios_documento` ON `Usuarios` (`tipoDocumento`, `numeroDocumento`);
CREATE INDEX `idx_sesiones_usuario` ON `Sesiones` (`IdUsuario`);
CREATE INDEX `idx_roles_usuarios` ON `RolesUsuarios` (`IdUsuarios`, `IdRoles`);