import { Router } from 'express';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import profileRoutes from './profile.routes';
import loanApplicationRoutes from './loan-application.routes';

const router = Router();

// Rutas de autenticación
router.use('/auth', authRoutes);

// Rutas de usuario
router.use('/users', userRoutes);

// Rutas de perfiles
router.use('/profile', profileRoutes);

// Rutas de solicitudes de préstamo
router.use('/loan-applications', loanApplicationRoutes);

export default router;