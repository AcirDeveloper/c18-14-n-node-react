import { Router } from 'express';
import { validateDTO } from '../middleware/validation.middleware';
import { authMiddleware } from '../middleware/auth.middleware';
import { authorizeMiddleware } from '../middleware/authorization.middleware';
import { CreateLoanApplicationDTO, UpdateLoanApplicationDTO } from '../dtos/loan-application/create-loan-application.dto';
import { createLoanApplication, getLoanApplication, getLoanApplications, updateLoanApplication } from '../controllers/loan-application.controller';
const router = Router();

router.get('/', authMiddleware, getLoanApplications);
router.post('/', authMiddleware , authorizeMiddleware(['applicant','investor']),validateDTO(CreateLoanApplicationDTO), createLoanApplication);
router.get('/:id', authMiddleware, getLoanApplication);
router.patch('/:id', authMiddleware, authorizeMiddleware(['applicant','investor']),validateDTO(UpdateLoanApplicationDTO), updateLoanApplication);

export default router;