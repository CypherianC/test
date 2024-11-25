const admin = require('firebase-admin');

const serviceAccount = require('../exoticfoodss-firebase-adminsdk-awtul-004bd15f0f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://exoticfoodss-default-rtdb.firebaseio.com/"
});

const db = admin.database();

module.exports = db;
