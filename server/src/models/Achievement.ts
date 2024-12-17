// src/models/Achievement.ts
import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import { IGame } from './Game';

// Interface pour le modèle Achievement
export interface IAchievement extends Document {
  user: IUser;  // Référence à l'utilisateur
  game: IGame;  // Référence au jeu
  title: string;  // Titre de l'accomplissement
  description: string;  // Description de l'accomplissement
  date: Date;  // Date à laquelle l'accomplissement a été obtenu
}

// Définir le schéma pour le modèle Achievement
const achievementSchema = new Schema<IAchievement>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Création du modèle
const Achievement = mongoose.model<IAchievement>('Achievement', achievementSchema);

export default Achievement;
