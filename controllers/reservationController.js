const reservationModel = require('../models/reservationModel');

exports.saveReservation = (req, res) => {
  const { name, email, phone, date, time, people, message } = req.body;

  // Validação simples
  if (!name || !email || !phone || !date || !time || !people) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  // Salvar a reserva no Firebase
  reservationModel.createReservation({
    name, email, phone, date, time, people, message
  })
    .then(() => {
      res.status(201).json({ message: 'Reserva criada com sucesso!' });
    })
    .catch(error => {
      res.status(500).json({ message: 'Erro ao salvar a reserva.', error });
    });
};
