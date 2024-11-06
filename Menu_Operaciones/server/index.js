const express = require('express');
const userController = require('./controller/usuariosController');

const app = express();
const port = 3000;

app.get('/users', userController.getUsers);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});