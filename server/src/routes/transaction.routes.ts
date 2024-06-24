import { Router } from "express";
import { validateDTO } from "../middleware/validation.middleware";
import { MakePaymentDTO, RechargeAccountDTO, WithdrawFromAccountDTO } from "../dtos/transaction/transaction.dto";
import { getTransactions, makePayment, rechargeAccount, withdrawFromAccount } from "../controllers/transaction.controller";
import { authorizeMiddleware } from "../middleware/authorization.middleware";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.get('/', authMiddleware, authorizeMiddleware(['applicant','investor']), getTransactions);
router.post('/make-payment', authMiddleware, validateDTO(MakePaymentDTO), authorizeMiddleware(['applicant','investor']),makePayment);
router.post('/recharge-account', authMiddleware, validateDTO(RechargeAccountDTO), authorizeMiddleware(['applicant','investor']),rechargeAccount);
router.post('/withdraw-from-account', authMiddleware, validateDTO(WithdrawFromAccountDTO), authorizeMiddleware(['applicant','investor']),withdrawFromAccount);

export default router;