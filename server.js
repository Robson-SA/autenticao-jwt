import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('🔗 Conectado ao MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));
