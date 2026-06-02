import http from 'http';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';
import { Server } from 'socket.io'



dotenv.config(); // load environment


const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || '';



if(!MONGODB_URI){
    console.error('CRITICAL: MONGODB_URI is not defined in environment variables.');
    process.exit(1)
}



const server = http.createServer(app);

const io = new Server (server , {
    cors : {
        origin: "*", 
        methods: ["GET", "POST"]
    }
})



mongoose.connect(MONGODB_URI)
        .then(() =>{
            console.log(" mongoDB connected successfully")

            server.listen(PORT , () =>{
                console.log(`Server is running on PORT : ${PORT}`)
            })
        })
        .catch((error : unknown) =>{
            const errorMessage = error instanceof Error ? error.message : String(error)
            console.error("got error in mongoDB connnection ", errorMessage)
            process.exit(1)
        })