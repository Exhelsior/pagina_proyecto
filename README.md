# Master Bread - Sistema de Gestión

Sistema web para gestionar inventario, pedidos y envíos de una panadería.

## Requisitos Previos

- Node.js (versión 14 o superior)
- MySQL (versión 5.7 o superior)
- Git

## Instalación

1. Clona el repositorio:
```sh
git clone <url-del-repositorio>
cd Menu_Operaciones
```

2. Instala las dependencias del servidor:
```sh
cd server
npm install
```

3. Configura la base de datos:
- Crea una base de datos MySQL llamada `masterbread`
- Importa el archivo `server/database/MasterBread.sql` para crear las tablas
- Importa el archivo `server/database/DatosFictisios.sql` para cargar datos de prueba

4. Configura las variables de entorno:
- Crea un archivo `.env` en la carpeta `server` con los siguientes datos:
```
DB_MAIN_HOST=localhost
DB_MAIN_USER=tu_usuario
DB_MAIN_PASSWORD=tu_contraseña
DB_MAIN_NAME=masterbread
PORT=3000
```

## Ejecución

1. Inicia el servidor:
```sh
cd server
npm run dev
```

2. Abre el cliente:
- Abre el archivo `client/index.html` en tu navegador web
- O utiliza un servidor web local como Live Server de VS Code

## Características Principales

- Gestión de inventario de productos
- Sistema de pedidos
- Seguimiento de envíos
- Control de usuarios y roles
- Interfaz responsive

## Roles de Usuario

- ADMINISTRADOR: Acceso total al sistema
- JEFE DE INVENTARIO: Gestión de productos
- DESPACHADOR: Gestión de pedidos
- REPARTIDOR: Gestión de envíos

## Tecnologías Utilizadas

- Frontend: HTML, CSS, JavaScript vanilla
- Backend: Node.js, Express
- Base de datos: MySQL
- Autenticación: JWT, Bcrypt

