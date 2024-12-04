const express = require("express");
const { addReservation } = require("../controllers/reservationController"); // Caminho correto para o controller
const router = express.Router();

router.post("/", addReservation); // Vincula a rota POST ao controller

module.exports = router;
