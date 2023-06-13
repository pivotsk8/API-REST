const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/carnet-adresses");

app.get("/", (req, res) => {
  res.send("hola");
});

app.listen(port, () => {
  console.log(`serveur ecoute sur le port ${port} 😃`);
});
