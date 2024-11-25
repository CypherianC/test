const express = require('express');
const bodyParser = require('body-parser');
const firebaseAdmin = require('firebase-admin');
const reservationRoutes = require('./routes/reservationRoutes');

// Inicializar o Firebase Admin com a chave privada
const serviceAccount = require('./exoticfoodss-firebase-adminsdk-awtul-004bd15f0f.json');
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://exoticfoodss-default-rtdb.firebaseio.com' // Use o seu URL do Firebase Realtime Database
});

const app = express();
const port = 3000;

// Middleware para ler o corpo das requisições
app.use(bodyParser.json());

// Roteamento
app.use('/reservations', reservationRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
