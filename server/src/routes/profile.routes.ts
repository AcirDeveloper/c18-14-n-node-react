import { Router } from 'express';
import { validateDTO } from '../middleware/validation.middleware';
import { authMiddleware } from '../middleware/auth.middleware';
import { authorizeMiddleware } from '../middleware/authorization.middleware';
import { UpdateProfileDTO } from '../dtos/profile/verify-profile.dto';
import { addCreditCard, deleteCreditCard, getProfile, getProfiles, updateProfile } from '../controllers/profile.controller';

const router = Router();

router.get('/', authMiddleware, authorizeMiddleware(['admin']),getProfiles);
router.get('/:id/my', authMiddleware, getProfile);
router.post('/:id/add-credit-card',authMiddleware, authorizeMiddleware(['applicant','investor']),addCreditCard);
router.delete('/:id/delete', authMiddleware,authorizeMiddleware(['applicant','investor']),deleteCreditCard)
router.patch('/:id', authMiddleware,validateDTO(UpdateProfileDTO), updateProfile);

export default router;