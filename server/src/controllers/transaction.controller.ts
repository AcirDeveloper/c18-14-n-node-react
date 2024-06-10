// src/controllers/transactionController.ts
import { Request, Response } from 'express';
import { TransactionService } from '../services/transaction.service';
import { MakePaymentDTO, RechargeAccountDTO, WithdrawFromAccountDTO } from '../dtos/transaction/transaction.dto';
import { User } from '../entities/user.entity';

const transactionService = new TransactionService();

export const getTransactions = async (req: Request, res: Response): Promise<void> => {
  try{
      const userLogged = req.user as User;
      const myTransactions = await transactionService.getTransactions(userLogged);
      res.status(200).json(myTransactions);
  } catch (error: any) {
      res.status(500).json({ message: error.message });
  }
};

export const makePayment = async (req: Request, res: Response) => {
  const makePaymentDto: MakePaymentDTO = req.body;
    try {
        await transactionService.makePayment(makePaymentDto);
        res.status(200).json({message: 'Payment successful'});
    } catch (error) {
        res.status(400).json(error.message);
    }
};

export const rechargeAccount = async (req: Request, res: Response) => {
    const rechargeAccountDto: RechargeAccountDTO = req.body;
    try {
        await transactionService.rechargeAccount(rechargeAccountDto);
        res.status(200).json({message: 'Account recharged successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
};

export const withdrawFromAccount = async (req: Request, res: Response) => {
  const withdrawFromAccountDto: WithdrawFromAccountDTO = req.body;
  try {
    await transactionService.withdrawFromAccount(withdrawFromAccountDto);
    res.status(200).json({message: 'Withdrawal successful'});
  } catch (error) {
    res.status(400).json(error.message);
  }
};
