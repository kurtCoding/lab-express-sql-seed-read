const express = require("express");
const songs = express.Router();

songs.get("/", (req, res) => {
    res.json({ status: "ok"});
});

module.exports = songs;