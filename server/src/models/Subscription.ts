// src/models/Subscription.ts
import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

// Enum pour les types d'abonnement
export enum SubscriptionType {
  MONTHLY = 'monthly',
  ANNUAL = 'annual',
}

// Interface pour le modèle Subscription
export interface ISubscription extends Document {
  user: IUser;  // Référence à l'utilisateur
  type: SubscriptionType;  // Type d'abonnement
  startDate: Date;  // Date de début de l'abonnement
  endDate: Date;  // Date de fin de l'abonnement
  isActive: boolean;  // Si l'abonnement est actif ou non
}

// Définir le schéma pour le modèle Subscription
const subscriptionSchema = new Schema<ISubscription>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: Object.values(SubscriptionType),
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

// Création du modèle
const Subscription = mongoose.model<ISubscription>('Subscription', subscriptionSchema);

export default Subscription;
