import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login', {
                email, password
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
            setMessage('Login successful');
            navigate('/dashboard');

        } catch (error) {
            setMessage(error.response?.data?.message || 'Login failed');
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} >
                <input type="email" placeholder="Enter Email :" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br /> <br />
                <input type="password" placeholder="Enter Password :" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br /> <br />
                <p>Don't have an account? <Link to="/register">Register</Link></p>
                <button type="submit">Login</button>
                {message && <p>{message}</p>}
            </form>
        </div>


    )
}
export default Login;