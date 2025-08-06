import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes.mjs'
import dotenv from 'dotenv'
import connectDB from './config/db.mjs';
import cookieParser from 'cookie-parser';
dotenv.config();
connectDB()

let app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:3000", // Allow frontend origin
  credentials: true, 
}))

let PORT = process.env.PORT || 8080

app.use('/user',userRoutes);

app.listen(PORT,() => {
  console.log('http://localhost:8080');

})