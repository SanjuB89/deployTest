const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Welcome Home");
});
server.listen(3000, () => {
  console.log("server listening");
});
