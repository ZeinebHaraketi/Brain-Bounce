// src/models/Review.ts
import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import { IGame } from './Game';

// Interface pour le modèle Review
export interface IReview extends Document {
  user: IUser;  // Référence à l'utilisateur
  game: IGame;  // Référence au jeu
  rating: number;  // Note (par exemple, de 1 à 5)
  comment: string;  // Commentaire de l'utilisateur
  date: Date;  // Date de la révision
}

// Définir le schéma pour le modèle Review
const reviewSchema = new Schema<IReview>({
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
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Création du modèle
const Review = mongoose.model<IReview>('Review', reviewSchema);

export default Review;
