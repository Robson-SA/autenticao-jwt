import express from 'express';
import { registerUser, loginUser, getProtectedData } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js'; 

const router = express.Router();

// Rota para registrar um novo usuário
router.post('/register', registerUser);

// Rota para login do usuário
router.post('/login', loginUser);

// Rota protegida (requere autenticação via JWT)
router.get('/protected', authMiddleware, getProtectedData);

export default router;
