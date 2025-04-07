/**
 * Creado el 26 de noviembre del 2024
 * Funcion: albergue de las bases de datos usadas en el proyecto
 */

require("dotenv").config();
const colors =require("colors");
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

// Función para probar la conexión
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log(colors.blue("Conexión exitosa a la base de datos"));
    connection.release();

  } catch (error) {
    console.error(colors.red.bold("Error al conectar a la base de datos:", error.message));
  }
}

module.exports = {
  pool,
  testConnection
};
