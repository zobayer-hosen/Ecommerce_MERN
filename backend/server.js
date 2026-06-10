import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

app.use(cors()); //middleware
app.use(express.json()); // Define a simple route to test the server

app.get('/', (req, res) => {
    res.send('API is running');
});

connectDB();// Connect to MongoDB before starting the server 

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});