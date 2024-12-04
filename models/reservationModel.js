const database = require("../config/firebaseConfig");

const createReservation = async (reservationData) => {
  try {
    const ref = database.ref("reservations");
    await ref.push(reservationData);
    return { message: "Reserva salva com sucesso!" };
  } catch (error) {
    throw new Error("Erro ao salvar reserva: " + error.message);
  }
};

module.exports = { createReservation };
