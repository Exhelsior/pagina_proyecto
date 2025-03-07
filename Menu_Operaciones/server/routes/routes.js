/**
 * Creado el 26 de noviembre del 2024
 * Funcion: albergue de las rutas para su uso posterior en postman
 */

const express = require("express");
const router = express.Router();
const {
  loginUsuario,
  tokenController,
  newPasswordController,
} = require("../controller/controller usuarios/ApiCrud");


const {

  crearUsuario,
  getUsuarios,
  deleteUsuario,
  actualizarUsuario,
  generarToken,
  resetPassword,
  getRoles,
} = require("../controller/controller usuarios/usuarioController");

// Rutas para usuarios
<<<<<<< HEAD
router.post("/create", crearUsuario);
router.post("/login", loginUsuario);
router.get("/roles", getRoles);
router.get("/recovery", resetPassword);
router.post("/token", generarToken);
=======
router.post("/login", loginUsuario);
router.post("/recovery", tokenController.generateToken);
router.post("/newPassword", newPasswordController.updatePassword);
router.post("/createUser", crearUsuario);
router.get("/rolesUser", getRoles);
/* router.get("/recoveryUser", resetPassword); */
/* router.post("/tokenUser", generarToken); */
>>>>>>> ad9090f76b890c582e09c4504f44ae2b038fd2c3
router.get("/:id", getUsuarios);
router.delete("/delete/:id", deleteUsuario);
router.put("/update/:id", actualizarUsuario);

module.exports = router;
