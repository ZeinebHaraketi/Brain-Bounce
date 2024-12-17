import User, { IUser } from '../models/User';
import { UserRole } from '../models/User';

// Fonction pour enregistrer un utilisateur
export const registerUser = async (
  username: string,
  email: string,
  password: string,
  image: string = ''
): Promise<IUser> => {
  // Vérifier si l'utilisateur existe déjà
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    throw new Error("Un utilisateur avec cet email ou ce nom d'utilisateur existe déjà");
  }

  // Créer un nouvel utilisateur
  const newUser = new User({
    username,
    email,
    password,
    image,
    role: UserRole.CLIENT, // Rôle par défaut
  });

  // Sauvegarder l'utilisateur dans la base de données
  await newUser.save();
  return newUser;
};



export const loginUser = async (email: string, password: string) => {
    // Chercher l'utilisateur par email
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Utilisateur non trouvé');
    }
  
    // Vérifier le mot de passe
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error('Mot de passe incorrect');
    }
  
    return user;
  };
