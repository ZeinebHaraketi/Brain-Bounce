// src/models/Progress.ts
import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import { IGame } from './Game';

// Interface pour le modèle Progress
export interface IProgress extends Document {
  user: IUser;  // Référence à l'utilisateur
  game: IGame;  // Référence au jeu
  level: number;  // Niveau atteint dans le jeu
  completed: boolean;  // Si le jeu est terminé ou non
  date: Date;  // Date d'achèvement
}

// Définir le schéma pour le modèle Progress
const progressSchema = new Schema<IProgress>({
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
  level: {
    type: Number,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Création du modèle
const Progress = mongoose.model<IProgress>('Progress', progressSchema);

export default Progress;
