import 'dotenv/config';
import express from 'express';
import { Server } from 'http';
import Io from 'socket.io';

const app = express()

const server = new Server(app)

const cors = {
  origin: "*",
  methods: ["GET", "POST"],
}

const io = new Io.Server(server, { cors })

io.on('connection', sok => {

  sok.on('teste', sok => {
    console.log(sok)
  })

})

const PORT = process.env.PORT || 3333

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));