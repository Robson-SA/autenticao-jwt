# 🛡️ API de Autenticação com JWT

Este projeto é uma API simples de autenticação desenvolvida com Node.js e Express. Ele permite o cadastro de usuários, login com verificação de senha, e acesso a rotas protegidas utilizando tokens JWT.

## 🚀 Funcionalidades

- Cadastro de usuários com criptografia de senha (bcrypt)
- Login com verificação de credenciais
- Geração de token JWT
- Rota protegida que só pode ser acessada com token válido

## 🧰 Tecnologias utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- bcrypt
- jsonwebtoken
- dotenv

## 📁 Estrutura de pastas

📦auth-api ┣ 📂controllers ┃ ┗ userController.js ┣ 📂middlewares ┃ ┗ authMiddleware.js ┣ 📂models ┃ ┗ User.js ┣ 📂routes ┃ ┗ userRoutes.js ┣ .env ┣ server.js ┗ README.md