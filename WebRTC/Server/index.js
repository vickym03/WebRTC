const http = require("http");
const app = require("./app");
const server = http.createServer(app);
require('dotenv').config()

const port = process.env.PORT;

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})


io.on("connection", (socket) => {
  socket.emit("me", socket.id)

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded")
  })

  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
  })

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal)
  })
})


// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



