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
  getUsuario,
  deleteUsuario,
  actualizarUsuario,
  getRoles,
} = require("../controller/controller usuarios/usuarioController");

// Rutas para usuarios
router.post("/login", loginUsuario);
router.post("/recovery", tokenController.generateToken);
router.post("/newPassword", newPasswordController.updatePassword);
router.post("/createUser", crearUsuario);
router.get("/role", getRoles);
router.get("/:id", getUsuario);
router.delete("/delete", deleteUsuario);
router.put("/update/:id", actualizarUsuario);

module.exports = router;
