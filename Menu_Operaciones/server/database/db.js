/**
 * Creado el 26 de noviembre del 2024
 * Funcion: albergue de las bases de datos usadas en el proyecto
 */
require("dotenv").config();
const mysql = require("mysql2/promise");

// Configuración de la conexión
const pool = mysql.createPool({
  host: process.env.DB_MAIN_HOST,
  user: process.env.DB_MAIN_USER,
  password: process.env.DB_MAIN_PASSWORD,
  database: process.env.DB_MAIN_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const inventarypool = mysql.createPool({
<<<<<<< HEAD
    host: 'localhost',
    user: 'root',
    password: '2206',// cambiar la contraseña de tu servidor a root
    database: 'masterbread',//actualizar este nombre al database del inventario
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
=======
  host: process.env.DB_SECOND_HOST,
  user: process.env.DB_SECOND_USER,
  password: process.env.DB_SECOND_PASSWORD, // cambiar la contraseña de tu servidor a root
  database: process.env.DB_SECOND_NAME, //actualizar este nombre al database del inventario
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
>>>>>>> fff44424e5faa7035db79f5ef2ecf52bd5d85a0d
});

// Función para probar la conexión
async function testConnection() {
<<<<<<< HEAD
    try {
        // const connection = await pool.getConnection();
        // console.log('Conexión exitosa a la base de datos de usuarios');
        // connection.release();
=======
  try {
    const connection = await pool.getConnection();
    console.log("Conexión exitosa a la base de datos de usuarios");
    connection.release();
>>>>>>> fff44424e5faa7035db79f5ef2ecf52bd5d85a0d

    const connect = await inventarypool.getConnection();
    console.log("Conexión exitosa a la base de datos de inventario");
    connect.release();
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

module.exports = {
<<<<<<< HEAD
    // pool,
    inventarypool,
    testConnection
};
=======
  pool,
  inventarypool,
  testConnection,
};
>>>>>>> fff44424e5faa7035db79f5ef2ecf52bd5d85a0d
