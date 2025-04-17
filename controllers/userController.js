// controllers/userController.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const registerUser = async (req, res) => {
  const { nome, contato, dataNascimento, login, senha } = req.body;

  try {
    // Verifica se o usuário já existe
    const existingUser = await User.findOne({ login });
    if (existingUser) return res.status(400).json({ message: 'Usuário já existe' });

    // Cria o novo usuário
    const newUser = new User({
      nome,
      contato,
      dataNascimento,
      login,
      senha, // A senha será criptografada pelo pre-save hook
    });

    // Salva o usuário no banco de dados
    await newUser.save();

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário', error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { login, senha } = req.body;

  try {
    // Verifica se o usuário existe
    const user = await User.findOne({ login });
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    // Compara a senha informada com a senha criptografada
    const passwordMatch = await bcrypt.compare(senha, user.senha);
    if (!passwordMatch) return res.status(401).json({ message: 'Senha incorreta' });

    // Gera o token JWT
    const authToken = jwt.sign(
      { id: user._id, login: user.login },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token: authToken });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
  }
};

// Função para dados protegidos
export const getProtectedData = (req, res) => {
  res.json({
    message: '🔐 Acesso autorizado!',
    user: req.user,
  });
};
