import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    // Retirer useNewUrlParser et useUnifiedTopology
    await mongoose.connect(process.env.MONGO_URI!, {
      // Aucune option supplémentaire n'est nécessaire ici avec la version 6.x de Mongoose
    });
    console.log('MongoDB connecté');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;
