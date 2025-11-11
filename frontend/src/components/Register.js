import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/auth/register', {
               name : username, email, password
            });
            setMessage(response.data.message);
            navigate('/');
        } catch (error) {
            setMessage(error.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Name :" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <br /> <br />
                <input type="email" placeholder="Enter Email :" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br /> <br />
                <input type="password" placeholder="Enter Password :" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br /> <br />
                <p>Already registered? <Link to='/'>Login</Link></p>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Register;
