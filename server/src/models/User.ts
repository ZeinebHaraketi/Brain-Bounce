// import mongoose, { Document, Schema } from 'mongoose';
// import bcrypt from "bcryptjs";

// export enum UserRole {
//     ADMIN = 'admin',
//     CLIENT = 'client',
// }

// // Interface pour typer l'utilisateur
// export interface IUser extends Document {
//   username: string;
//   email: string;
//   password: string;
//   role: UserRole;  // Utilisation de l'enum pour définir le rôle
//   image: string,
//   createdAt: Date;
//   updatedAt: Date;
// }

// // Schéma pour l'utilisateur
// const userSchema: Schema<IUser> = new Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       match: [/\S+@\S+\.\S+/, 'Veuillez entrer un email valide'],
//     },
//     password: {
//       type: String,
//       required: true,
//       minlength: 6,
//     },
//     image: {
//       type: String,
//     },
//     role: {
//         type: String,
//         enum: Object.values(UserRole),  // Utilisation de l'enum dans le schéma
//         default: UserRole.CLIENT,  // Le rôle par défaut est 'client'
//       },
//   },
//   { timestamps: true }
// );

// // Pré-hachage du mot de passe avant de sauvegarder un utilisateur
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();

//   // Hacher le mot de passe avec bcrypt
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// // Méthode pour comparer les mots de passe (lors de la connexion)
// userSchema.methods.comparePassword = async function (
//   password: string
// ): Promise<boolean> {
//   return await bcrypt.compare(password, this.password);
// };

// // Créer et exporter le modèle
// const User = mongoose.model<IUser>('User', userSchema);
// export default User;
import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

// Enum pour les rôles
export enum UserRole {
    ADMIN = 'admin',
    CLIENT = 'client',
}

// Interface pour typer l'utilisateur
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: UserRole;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(password: string): Promise<boolean>; // Définir la méthode ici
}

// Schéma pour l'utilisateur
const userSchema: Schema<IUser> = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Veuillez entrer un email valide'],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.CLIENT,
    },
  },
  { timestamps: true }
);

// Pré-hachage du mot de passe avant de sauvegarder un utilisateur
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Méthode pour comparer les mots de passe (lors de la connexion)
userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

// Créer et exporter le modèle
const User = mongoose.model<IUser>('User', userSchema);
export default User;
