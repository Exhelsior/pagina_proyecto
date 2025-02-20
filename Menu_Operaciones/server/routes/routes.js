/**
 * Creado el 26 de noviembre del 2024
 * Funcion: albergue de las rutas para su uso posterior en postman
 */

const express = require("express");
const router = express.Router();
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
router.post("/createUser", crearUsuario);
router.get("/:id", getUsuarios);
router.get("/rolesUser", getRoles);
router.get("/recoveryUser", resetPassword);
router.delete("/delete/:id", deleteUsuario);
router.put("/update/:id", actualizarUsuario);
router.post("/tokenUser", generarToken);

module.exports = router;
