// src/models/Payment.ts
import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

// Enum pour les méthodes de paiement
export enum PaymentMethod {
  CREDIT_CARD = 'credit_card',
  PAYPAL = 'paypal',
  BANK_TRANSFER = 'bank_transfer',
}

// Interface pour le modèle Payment
export interface IPayment extends Document {
  user: IUser;  // Référence à l'utilisateur
  amount: number;  // Montant du paiement
  method: PaymentMethod;  // Méthode de paiement
  date: Date;  // Date du paiement
  status: string;  // Statut du paiement (par exemple, "success", "pending", "failed")
}

// Définir le schéma pour le modèle Payment
const paymentSchema = new Schema<IPayment>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  method: {
    type: String,
    enum: Object.values(PaymentMethod),
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
    default: 'pending',
  },
});

// Création du modèle
const Payment = mongoose.model<IPayment>('Payment', paymentSchema);

export default Payment;
