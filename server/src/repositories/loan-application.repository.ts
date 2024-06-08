import { AppDataSource } from '../database/data-source';
import { LoanApplication } from '../entities/loan-application.entity';

export const LoanApplicationRepository = AppDataSource.getRepository(LoanApplication);