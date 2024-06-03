import { Router } from 'express';
import { validateDTO } from '../middleware/validation.middleware';
import { LoginUserDTO } from '../dtos/login.dto';
import { login, recoverPassword, resetPassword } from '../controllers/auth.controller';
import { RecoverPasswordDTO } from '../dtos/recover-password.dto';
import { ResetPasswordDTO } from '../dtos/reset-password.dto';
const router = Router();

router.post('/login', validateDTO(LoginUserDTO), login);
router.post('/recover-password',validateDTO(RecoverPasswordDTO), recoverPassword);
router.post('/reset-password',validateDTO(ResetPasswordDTO), resetPassword);

export default router;