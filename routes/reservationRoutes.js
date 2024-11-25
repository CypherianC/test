const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.post('/agen', reservationController.saveReservation);

module.exports = router;
