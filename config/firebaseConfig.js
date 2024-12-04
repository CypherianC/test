const admin = require("firebase-admin");
const dotenv = require("dotenv");

dotenv.config();

const serviceAccount = require("../exoticfoodss-firebase-adminsdk-awtul-e6a7df93f5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://exoticfoodss-default-rtdb.firebaseio.com", 
});

const db = admin.database();
module.exports = db;
