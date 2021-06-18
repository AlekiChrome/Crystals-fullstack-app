const express = require("express");
const rocks = require("./models/rock")

const app = express();

app.get("/", (req, res) => { // * Created route
    res.send(`Crystals App`);
});

app.get("/rocks", (req, res) => {
    res.send(rocks);
});

module.exports = app;
