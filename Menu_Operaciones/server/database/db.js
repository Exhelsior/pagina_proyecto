/**
 * Creado el 26 de noviembre del 2024
 * Funcion: albergue de las bases de datos usadas en el proyecto
 */
const mysql = require('mysql2/promise');

// Configuración de la conexión
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'masterbread',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const inventarypool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',// cambiar la contraseña de tu servidor a root
    database: 'masterbreadInventario',//actualizar este nombre al database del inventario
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Función para probar la conexión
async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Conexión exitosa a la base de datos');
        connection.release();
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}
async function testConnection() {
    try {
        const connection = await inventarypool.getConnection();
        console.log('Conexión exitosa a la base de datos');
        connection.release();
    } catch (error) {
        console.error('Error al conectar a la base de datos de inventario:', error);
    }
}

module.exports = {
    pool,
    inventarypool,
    testConnection
};