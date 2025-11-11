import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import verifyTokenn from '../middleware/auth.js';

const router = express.Router();

// User Registration Route
router.post("/register", async(req, res)=> {
    try {
        console.log("Request Body:", req.body);
        const { name, email, password} = req.body;

        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({ message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name, email, password: hashedPassword
        })
        res.status(201).json({message: "User registered successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });    
    }
});

router.post("/login", async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({ email});
        if(!user) {
            return res.status(400).json({ message: "Invalid credentials"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({ message: "Invalid credentials"});
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error"});
    }
})

router.get("/dashboard", verifyTokenn, (req, res) => {
    res.status(200).json({ message: `Welcome to the dashboard, ${req.user.userId}` });
})

export default router;