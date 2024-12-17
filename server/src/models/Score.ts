// src/models/Score.ts
import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import { IGame } from './Game';

// Interface pour le modèle Score
export interface IScore extends Document {
  user: IUser;  // Référence à l'utilisateur
  game: IGame;  // Référence au jeu
  score: number;  // Le score de l'utilisateur dans le jeu
  date: Date;  // La date à laquelle le score a été enregistré
}

// Définir le schéma pour le modèle Score
const scoreSchema = new Schema<IScore>({
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
  score: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Création du modèle
const Score = mongoose.model<IScore>('Score', scoreSchema);

export default Score;
