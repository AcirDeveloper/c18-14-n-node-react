import { Router } from 'express';
import { validateDTO } from '../middleware/validation.middleware';
import { authMiddleware } from '../middleware/auth.middleware';
import { authorizeMiddleware } from '../middleware/authorization.middleware';
import { UpdateProfileDTO } from '../dtos/profile/verify-profile.dto';
import { getProfile, getProfiles, updateProfile } from '../controllers/profile.controller';

const router = Router();

router.get('/', authMiddleware,authorizeMiddleware(['admin']),getProfiles);
router.get('/:id/my', authMiddleware, getProfile);
router.patch('/:id', authMiddleware,validateDTO(UpdateProfileDTO), updateProfile);

export default router;