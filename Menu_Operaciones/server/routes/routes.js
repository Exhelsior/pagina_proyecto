/**
 * Creado el 26 de noviembre del 2024
 * Funcion: albergue de las rutas para su uso posterior en postman
 */

const express = require("express");
const router = express.Router();
const {
  loginUsuario,
} = require("../controller/controller usuarios/login");
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
router.post("/create", crearUsuario);
router.post("/login", loginUsuario);
router.get("/roles", getRoles);
router.get("/recovery", resetPassword);
router.post("/token", generarToken);
router.get("/:id", getUsuarios);
router.delete("/delete/:id", deleteUsuario);
router.put("/update/:id", actualizarUsuario);

module.exports = router;
