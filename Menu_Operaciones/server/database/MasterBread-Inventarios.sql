
CREATE TABLE Clientes (
	IdCliente int AUTO_INCREMENT PRIMARY KEY,
	NombreCompleto varchar(255),
	Telefono varchar(255),
	DireccionPrincipal varchar(255)
);

CREATE TABLE Producto (
	IdProducto int AUTO_INCREMENT PRIMARY KEY,
	NombreProducto varchar(255),
	Precio decimal,
	Cantidad int,
	Lote date,
	FechaVencimiento date
);

CREATE TABLE EstadoPedidos (
	IdEstado int AUTO_INCREMENT PRIMARY KEY,
	IdPedido int,
	IdCliente int,
	FechaPedido datetime,
	EstadoPedido varchar(255),
	Total decimal
);

CREATE TABLE Pedido (
	IdPedido int AUTO_INCREMENT PRIMARY KEY,
	IdCliente int,
	Cantidad int,
	PrecioUnitario decimal,
	Total decimal,
    FOREIGN KEY(IdCliente) REFERENCES Clientes (IdCliente) ON DELETE CASCADE
);

CREATE TABLE Envios (
	IdEnvio int AUTO_INCREMENT PRIMARY KEY,
	IdPedidos int,
	DireccionEnvio varchar(255),
	FechaEnvio datetime,
	EstadoEnvio varchar(255),
	Comentarios text,
    FOREIGN KEY (IdPedidos) REFERENCES Pedido (IdPedido) ON DELETE CASCADE
);

CREATE TABLE ItemPedidos (
	IdProducto int,
	IdPedido int,
	cantidad int,
	precio int,
	FOREIGN KEY (IdProducto) REFERENCES Producto (IdProducto) ON DELETE CASCADE,
    FOREIGN KEY (IdPedido) REFERENCES Pedido (IdPedido) ON DELETE CASCADE
);

CREATE TABLE Insumos (
	IdInsumo INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200), 
    fehcaIngreso DATE, 
    fechaVencimiento DATE, 
    cantidad DECIMAL(10,1)
);
