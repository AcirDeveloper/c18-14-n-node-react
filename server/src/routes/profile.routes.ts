import { Router } from 'express';
import { validateDTO } from '../middleware/validation.middleware';
import { CreateProfileDTO } from '../dtos/profile/verify-profile.dto';
import { authMiddleware } from '../middleware/auth.middleware';
import { authorizeMiddleware } from '../middleware/authorization.middleware';

const router = Router();

router.get('/', authMiddleware,getProfile);
router.patch('/:id', authMiddleware,validateDTO(UpdateProfileDTO), updateProfile);

export default router;