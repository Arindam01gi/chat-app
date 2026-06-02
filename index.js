require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')


const app = express()
const PORT = process.env.PORT ||3000;

app.use(express.json())



app.get('/',(req,res) =>{
   res.send("app is running")
})




mongoose.connect(process.env.MONGODB_URI).
         then(() => {
            console.log("Successfully connected to MONGODB")

            app.listen(PORT, () =>{
                 console.log(` app is listening PORT : ${PORT}`)
            })

             
         }).catch(() =>{
            console.error('Database connection failed:', error.message);
         })


