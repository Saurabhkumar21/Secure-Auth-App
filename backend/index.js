import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 8000;

// Connect to MongoDB
connectDB(); 

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})