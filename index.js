import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import locationRoutes  from './routes/location.js'
import registerRoutes from './routes/register.js'

dotenv.config()

connectDB()

const port = process.env.PORT  || 8080


//middleware
app.use(cors());
app.use(express.json());
app.use('/location',locationRoutes)
app.use('/register',registerRoutes)


app.get('/',(req,res) => {
    res.send({
        message:"Hello"
    })
})

app.listen(port, ()=>{
    console.log(`Server listening on ${port}`)
})