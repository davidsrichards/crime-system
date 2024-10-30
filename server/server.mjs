import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan';
import routes from './crime/crime.mjs';
import path from 'path';
dotenv.config()
import {fileURLToPath} from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// defining the root

const app = express();
const PORT = process.env.PORT || 4000;

// connect to database
mongoose.connect(process.env.M0NGODB_URL_LOCAL).then(() =>{
    app.listen(PORT, () =>{
        console.log('Connected to DATABASE')
        console.log(`Server is listening at PORT ${PORT}`)
    })
})

// middle wares

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({credentials: true, origin: "http://localhost:5173"}))
app.use(morgan('tiny'))

// defining routes

app.use(express.static(path.join(__dirname, './client/dist')))
app.use(routes)

app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, './client/dist/index.html'))
})
app.get('/api/crime', (req, res) =>{
    res.send('Hello world')
})




