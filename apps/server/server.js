const express = require('express')
const http = require('http')

const { Server}  = require('socket.io')
const cors = require('cors')
require('dotenv').config();

const app = express()
app.use(cors())
app.use(express.json())

const server = http.createServer(app)

const {SOCKET_EVENTS}  = require('@chat/shared')

const io = new Server(server, {
  cors: {
    origin: "*",
  }
});

app.get('/',(req,res) =>{
  res.send('chat server running')
})

io.on('connection',(socket) =>{
  socket.on( SOCKET_EVENTS.JOIN_ROOM ,(roomId) =>{
    socket.join(roomId)
    console.log(`User joined room: ${roomId}`);
  })

  socket.on('disconnect', () =>{
    console.log('User disconnected')
    
  } )
})


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})