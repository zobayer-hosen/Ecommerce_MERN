import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
 // Use auth routes for authentication-related endpoints

app.use(cors()); //middleware
app.use(express.json()); // Define a simple route to test the server

app.use('/api/auth', authRoutes);


connectDB();// Connect to MongoDB before starting the server 

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});