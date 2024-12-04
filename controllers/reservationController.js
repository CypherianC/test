const { createReservation } = require("../models/reservationModel");

const addReservation = async (req, res) => {
  try {
    const reservationData = req.body;
    const result = await createReservation(reservationData);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addReservation }; 
