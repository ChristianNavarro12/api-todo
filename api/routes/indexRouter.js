const express = require("express");
const router = express.Router();

// Importar y usar otras rutas
const todoRoutes = require("./todoRouter");

// Categorias de las rutas
router.use("/todo", todoRoutes);

module.exports = router;