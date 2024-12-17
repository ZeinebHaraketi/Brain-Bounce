import { Request, Response, NextFunction } from 'express';
import { loginUser, registerUser } from '../services/userService';

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Récupérer les données du corps de la requête
    const { username, email, password, image } = req.body;

    // Appeler le service pour enregistrer l'utilisateur
    const newUser = await registerUser(username, email, password, image);

    // Répondre avec l'utilisateur créé
    res.status(201).json({
      message: 'Utilisateur créé avec succès',
      user: {
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        image: newUser.image,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    // Passer l'erreur au middleware de gestion des erreurs
    next(error);
  }
};


export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    try {
      const { email, password } = req.body;
  
      // Appeler le service de login
      const user = await loginUser(email, password);
  
      // Retourner les informations de l'utilisateur sans le mot de passe
       res.status(200).json({
        message: 'Connexion réussie',
        user: {
          username: user.username,
          email: user.email,
          role: user.role,
          image: user.image,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    } catch (error) {
        // Passer l'erreur au middleware de gestion des erreurs
        next(error);
      }
  };