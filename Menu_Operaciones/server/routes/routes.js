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
} = require("../controller/controller usuarios/usuarioController");

const {
  getInventory,
  updateProducto,
  createProducto,
  deleteProducto,
  getInsumo,
  updateInsumo,
  createInsumo,
  deleteInsumo,
} = require("../controller/controller_inventario/inventarioController");

// Rutas para usuarios
router.post("/create", crearUsuario);
router.get("/get/:id", getUsuarios);
router.get("/recovery", resetPassword);
router.delete("/delete/:id", deleteUsuario);
router.put("/update/:id", actualizarUsuario);
router.post("/token", generarToken);

//Rutas de Inventario
router.get("/producto/:id", getInventory);
router.put("/producto/update/:id", updateProducto);
router.post("/producto/create", createProducto);
router.delete("/producto/delete/:id", deleteProducto);
router.get("/insumo/:id", getInsumo);
router.put("/insumo/update/:id", updateInsumo);
router.post("/insumo/create", createInsumo);
router.delete("/insumo/delete/:id", deleteInsumo);

module.exports = router;
