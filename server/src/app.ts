import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { json, urlencoded } from 'express';
import connectDB from './config/database';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();

app.use(express.json());

// Connexion à MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Exemple de route de base
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API GameLearn');
});


// Utilisation des routes pour les utilisateurs
app.use('/api/users', userRoutes);

// Démarrer le serveur
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
