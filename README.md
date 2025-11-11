# Secure-Auth-App
A simple full-stack authentication project built using the MERN stack
---

https://github.com/user-attachments/assets/5c579d96-f00d-48b3-ab48-40077bc10f7e

## 🚀 Tech Stack

### ✅ Frontend
- React JS
- Axios
- React Router DOM

### ✅ Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose ORM
- JWT Authentication
- Bcrypt Password Hashing

---

## 📌 Features

✓ User Registration  
✓ User Login  
✓ Password Encryption using bcrypt  
✓ JWT Token Authentication  
✓ Protected Route (Dashboard Page)  
✓ Logout functionality  
✓ MongoDB Database Integration  

---

## 📁 Project Structure

📦 project/
├─ 📁 backend
│ ├─ 📁 config
│ │ └─ db.js
│ ├─ 📁 middleware
│ │ └─ auth.js
│ ├─ 📁 models
│ │ └─ User.js
│ ├─ 📁 routes
│ │ └─ auth.js
│ ├─ .env
│ └─ server.js
│
└─ 📁 frontend
├─ src/
│ ├─ App.js
│ ├─ App.css
│ ├─ 📁 components
│ │ ├─ Login.js
│ │ ├─ Register.js
│ │ ├─ Dashboard.js
│ │ └─ UserRoute.js
└─ package.json

Backend runs ➝ http://localhost:8000/

---

Frontend runs ➝ http://localhost:3000/

---

## 🔐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Create new user |
| POST | /api/auth/login | Login & get token |
| GET | /api/auth/dashboard | Protected route |

---


## 👤 Author

*Saurabh Kumar*  
Full-Stack Developer (MERN)
