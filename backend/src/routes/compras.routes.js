const { Router } = require("express"); // Enrutador de peticiones http

const {
  getAllCompras,
  postCompra,
  deleteCompra,
} = require("../controllers/compras.controller");

const router = Router();

// Enrutador de peticiones HTTP
router.get("/compras", getAllCompras);

router.post("/compras", postCompra);

router.delete("/compras/:id", deleteCompra); // URL que permite el ingreso de parámetros

module.exports = router;
