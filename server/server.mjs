import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './crime/crime.mjs';
dotenv.config()

// defining the root

const app = express();
const PORT = 4000;

// connect to database
mongoose.connect("mongodb://localhost:27017/Crime-sys").then(() =>{
    app.listen(PORT, () =>{
        console.log('Connected to DATABASE')
        console.log(`Server is listening at PORT ${PORT}`)
    })
})

// middle wares

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

// defining routes


app.use(routes)





