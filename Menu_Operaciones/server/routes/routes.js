const express = require("express");
const router = express.Router();
const {
  crearUsuario,
  getUsuarios,
  deleteUsuario,
  actualizarUsuario,
  generarToken,
  resetPassword,
} = require("../controller/controller usuarios/usuarioController");

// Rutas para usuarios
router.post("/", crearUsuario);
router.get("/get/:id", getUsuarios);
router.get("/recovery", resetPassword);
router.delete("/:id", deleteUsuario);
router.put("/:id", actualizarUsuario);
router.post("/token", generarToken);

module.exports = router;
