# JWT Authentication in Node.js

A simple implementation of **JSON Web Token (JWT)** authentication using Node.js and Express.

## 🚀 Features
- User login with JWT issuance
- Middleware to protect routes
- Token expiration handling
- Secure secret management with `.env`

## 📦 Installation
Clone the repo and install dependencies:

bash
- git clone https://github.com/DhamodharThiyagarajan/jwt.git
- cd jwt
- npm install


## ⚙️ Setup
Create a .env file in the root:

Code
- PORT=5000
- MONGO_URI=your_mongodb_connection_string
- SECRET_KEY=your_secret_key


## 📖 Example Flow
- User logs in → server validates credentials
- Server issues JWT → client stores it (localStorage/cookie)
- Client sends JWT in Authorization: Bearer <token> header
- Middleware verifies token → grants access to protected routes
