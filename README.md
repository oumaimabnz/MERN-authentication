# 🔐 MERN Authentication

A **full-stack authentication system** built with the **MERN stack** (MongoDB, Express, React, Node.js).  
This project allows users to **register, log in, log out**, and access **protected dashboard routes** using **JWT-based authentication** and route protection.

This app demonstrates secure user authentication, API protection, frontend–backend communication, and token management in a real-world web application.

---

## 🚀 Live Demo

👉 https://mern-authentication-iota.vercel.app/

---

## 🧰 Tech Stack

### Frontend
- **React**
- **React Router**
- **JavaScript (ES6+)**
- **TailwindCSS**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JSON Web Tokens (JWT)**

---

## ✨ Features

- 👤 User registration
- 🔐 User login with JWT authentication
- 🧠 Protected routes (only accessible when logged in)
- 🔄 Redirect authenticated users away from login/register pages
- 📦 Secure password hashing
- 📱 Responsive and friendly UI

---

## 📁 Project Structure

```plaintext
MERN-authentication/
├── backend/                  # Express backend
│   ├── config/
|   |     ├──db.js
│   ├── middleware/
|   |     ├──auth.js          
│   ├── models/
|   |     ├──User.js
│   ├── routes/              
│   |     ├──auth.js             
│   ├── .env                  
│   └── server.js   
│
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── api/
|   |          ├──axios.js
│   │   ├── components/
|   |          ├──Navbar.jsx
|   |          ├──NotFound.jsx       
│   │   ├── pages/            
|   |          ├──Home.jsx
|   |          ├──Login.jsx
|   |          ├──Register.jsx     
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env                 
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
````

---

## 🛠️ Getting Started

1️⃣ Clone the repo
````bash
git clone https://github.com/oumaimabnz/MERN-authentication.git
cd MERN-authentication
````

2️⃣ Install dependencies

Backend:
````bash
cd backend
npm install
````

Frontend:
````bash
cd frontend
npm install
````

3️⃣ Environment Variables

Backend (backend/.env):
````bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:5173
````

Frontend (frontend/.env):
````bash
VITE_BACKEND_URL=http://localhost:5000
````

4️⃣ Start the application

Run backend:
````bash
cd backend
npm start
````

Run frontend:
````bash
cd frontend
npm run dev
````

Open your browser at:

http://localhost:5173

---

## 🚢 Deployment

You can deploy the project as two services:
- Frontend: deploy on Vercel (React/Vite)
- Backend: deploy on Render, Railway, or Cyclic
- Database: host on MongoDB Atlas

Add the same environment variables in the deployment dashboards.

---

## 🎯 What This Project Demonstrates


- Full-stack MERN authentication workflow
- Secure handling of passwords and tokens
- JWT protection of API routes
- Frontend and backend communication
- Environment variable usage in production

---

## 📬 Contact

👤 Oumaima Benaziza

🔗 LinkedIn: www.linkedin.com/in/oumaima-benaziza

📧 Email: oumaimabenaziza21@gmail.com

---

⭐ Support
If you find this project useful, feel free to star ⭐ the repository!

