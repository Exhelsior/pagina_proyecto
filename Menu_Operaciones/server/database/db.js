const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'masterbread'
});

connection.connect((err) => {  
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
        return;
    } 
    console.log('Conexión exitosa a la base de datos.', connection.threadId);
});

module.exports = connection;
