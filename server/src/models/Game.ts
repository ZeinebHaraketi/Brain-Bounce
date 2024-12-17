// src/models/Game.ts
import mongoose, { Document, Schema } from 'mongoose';

// Enum pour les catégories de jeux
export enum GameCategory {
  LANGUAGES = 'languages',
  MATHS = 'maths',
  PROGRAMMING = 'programming',
  GENERAL_KNOWLEDGE = 'general_knowledge',
}

// Interface pour le modèle Game
export interface IGame extends Document {
  title: string;
  description: string;
  category: GameCategory;  // Utilisation de l'enum pour définir la catégorie
  difficulty: string;  // Par exemple, 1 = facile, 2 = moyen, 3 = difficile
}

// Définir le schéma pour le modèle Game
const gameSchema = new Schema<IGame>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: Object.values(GameCategory),  // Utilisation de l'enum pour la catégorie
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['easy', 'medium', 'hard'],  // Difficulty level (facile, moyen, difficile)
  },
});

// Création du modèle
const Game = mongoose.model<IGame>('Game', gameSchema);

export default Game;
