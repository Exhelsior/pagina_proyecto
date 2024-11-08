const express = require("express");
const userController = require("./controller/usuariosController");
const insertUserController = require("./controller/insertarUsuarioController");

const app = express();
const port = 3000;
app.use(express.json());

app.get("/users", userController.getUsers);
app.get("/users/insert", insertUserController.createUser);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
