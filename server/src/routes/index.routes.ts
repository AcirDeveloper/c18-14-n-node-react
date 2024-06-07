import { Router } from 'express';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import profileRoutes from './profile.routes';

const router = Router();

// Rutas de autenticación
router.use('/auth', authRoutes);

// Rutas de usuario
router.use('/users', userRoutes);

// Rutas de perfiles
router.unsubscribe('/profile', profileRoutes);

export default router;