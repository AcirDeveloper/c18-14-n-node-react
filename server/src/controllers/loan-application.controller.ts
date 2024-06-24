import { Request, Response } from 'express';
import { LoanApplicationService } from '../services/loan-application.service';
import { CreateLoanApplicationDTO, UpdateLoanApplicationDTO } from '../dtos/loan-application/create-loan-application.dto';
import { User } from '../entities/user.entity';

const loanApplicationService = new LoanApplicationService();

export const getLoanApplications = async (req: Request, res: Response): Promise<void> => {
    try{
        const userLogged = req.user as User;
        const loanApplicationsList = await loanApplicationService.getAllLoanApplications(userLogged);
        res.status(200).json(loanApplicationsList);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getLoanApplication = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const loanApplication = await loanApplicationService.getLoanApplicationById(id);
        if (!loanApplication) {
            res.status(404).json({ message: 'Loan Application not found' });
        }
        res.status(200).json(loanApplication);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
    
}

export const createLoanApplication = async (req: Request, res: Response): Promise<void> => {
    const createLoanApplicationDto: CreateLoanApplicationDTO = req.body;
    const userLogged = req.user as User;
    try {
        const newLoanApplication = await loanApplicationService.createLoanApplication(createLoanApplicationDto, userLogged);
        res.status(201).json(newLoanApplication);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
    
}

export const updateLoanApplication = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const userLogged = req.user as User;
    const updateLoanApplicationDto: UpdateLoanApplicationDTO = req.body;
    try {
        const loanApplication = await loanApplicationService.updateLoanApplication(id, updateLoanApplicationDto,userLogged);
        loanApplication ? res.status(200).json(loanApplication) : res.status(404).json({ message: 'Loan Application not found' })
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
    
};
