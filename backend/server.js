const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express.js Server!</h1>");
});

const port = process.env.PORT || 3000;

const hostname = "localhost";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, Express.js Server!</h1>");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const tripRoutes = require("./routes/tripRoutes");
app.use("/api/trips", tripRoutes);
