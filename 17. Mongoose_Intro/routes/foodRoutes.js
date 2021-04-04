const express = require("express");
const foodModel = require("../models/food");
const app = express();

app.get("/foods", async (request, response) => {
  const foods = await foodModel.find({});
  // For now there is nothing inside the request, so it will not return anything

  try {
    response.send(foods);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
