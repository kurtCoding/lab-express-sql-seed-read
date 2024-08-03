//Dependencies
const cors = require("cors");
const express = require("express");

//Configuration
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
    res.send("Welcome to Tuner")
});

const songController = require("./back-end/controllers/songController");
app.use("/songs", songController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;