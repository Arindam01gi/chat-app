import express ,{Request, Response } from 'express'
import http from 'http';
import {Server , Socket} from 'socket.io';
import cors from 'cors';
import * as dotenv from 'dotenv';
import {SOCKET_EVENTS}  from '@chat/shared';



const app = express()
app.use(cors())
app.use(express.json())
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "*",
  }
});

app.get('/',(req :Request ,res:Response) =>{
  res.send('chat server running')
})

io.on('connection',(socket) =>{
  socket.on( SOCKET_EVENTS.JOIN_ROOM ,(roomId :string) =>{
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