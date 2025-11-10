import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 8000;

//MongoDb Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDb');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDb:', err);
    })


app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})