const express = require("express");

const server = express();

const db = [];

server.use(express.json());

server.get("/api/games", async (req, res) => {
  await res.status(200).json(db);
});

server.post("/api/games", async (req, res) => {
  const game = {
    title: req.body.title,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear
  };
  if (!req.body.title || !req.body.genre) {
    res.status(422).json({ message: "Title and genre are required." });
  } else {
    res.status(200).json(game);
  }
});

module.exports = server;
