const functions = require("firebase-functions");
const express = require("express");

const app = express();
app.get("/timestamp", (resquest, response) => {
  response.send(`${Date.now()}`);
});

exports.app =  functions.region('asia-south1').https.onRequest(app);
