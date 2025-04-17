// models/User.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  contato: String,
  dataNascimento: Date,
  login: { type: String, required: true, unique: true },
  senha: { type: String, required: true }
});

// Criptografa a senha antes de salvar
userSchema.pre('save', async function (next) {
  if (!this.isModified('senha')) return next();
  this.senha = await bcrypt.hash(this.senha, 10);
  next();
});

// Remove senha ao converter para JSON
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.senha;
  return obj;
};

const User = mongoose.model('User', userSchema);
export default User;