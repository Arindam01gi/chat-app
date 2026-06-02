import express , { Application , Request, Response } from 'express';
import cors from 'cors';


const app:Application = express()


app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get('/', (req:Request, res:Response) =>{
    res.send("app is running successfully")
})

export default app;
