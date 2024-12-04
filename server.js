const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./firebase");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/reservations", (req, res) => {
  const { name, email, phone, date, time, people, message } = req.body;

  const reservationRef = db.ref("reservations").push();
  reservationRef
    .set({ name, email, phone, date, time, people, message })
    .then(() => res.status(200).send("Reserva salva com sucesso!"))
    .catch((error) => res.status(500).send("Erro ao salvar reserva: " + error));
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
