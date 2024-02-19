import express from "express";
import http from "http";
import { fileURLToPath } from "url";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("chat", (msg) => {
    io.emit("chat", msg);
  });
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`);
});

app.use(express.static("client"));

server.listen(3000, () => {
  console.log("initalized");
});
