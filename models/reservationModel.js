const firebaseAdmin = require('firebase-admin');

// Função para salvar a reserva no Firebase Realtime Database
exports.createReservation = async (reservationData) => {
  try {
    const db = firebaseAdmin.database();
    const ref = db.ref('reservations'); // Referência ao nó 'reservations'
    await ref.push(reservationData); // Adiciona uma nova reserva
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};
