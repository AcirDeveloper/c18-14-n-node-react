import { Repository } from 'typeorm';
import { AppDataSource } from '../database/data-source';
import { LoanApplication, LoanApplicationStatus } from '../entities/loan-application.entity';
import { LoanApplicationRepository } from '../repositories/loan-application.repository';
import { CreateLoanApplicationDTO, UpdateLoanApplicationDTO } from '../dtos/loan-application/create-loan-application.dto';
import { User } from '../entities/user.entity';

export class LoanApplicationService {

    private loanApplicationRepository: Repository<LoanApplication>;

    constructor() {
        this.loanApplicationRepository = AppDataSource.getRepository(LoanApplication);
    }
    
    async getAllLoanApplications(userLogged: User): Promise<LoanApplication[]> {
        try {
            return await LoanApplicationRepository.find({
                relations: ['applicant','investor']
            });
        } catch (error: any) {
            throw new Error(error.message);
        }
        
    }

    async getLoanApplicationById(id: string): Promise<LoanApplication | null> {
        try {
            return await LoanApplicationRepository.findOne({ 
                where: {
                    id: id
                },
                relations: {
                    applicant: true,
                    investor: true,
                    paymentOrders: true
                }
            });
        } catch (error) {
            throw new Error(error.message);
        }
        
    }
    
    async createLoanApplication(createLoanApplicationDto: CreateLoanApplicationDTO, userLogged: User): Promise<LoanApplication> {
        const {interest_rate, capital_with_interest,...otherValues} = createLoanApplicationDto;
        const interestRateFixed = parseFloat(createLoanApplicationDto.interest_rate.toString());
        const capitalWithInterestFixed = parseFloat(createLoanApplicationDto.capital_with_interest.toString());
        
        try {
            const newLoanApplication = this.loanApplicationRepository.create({
                applicant: userLogged,
                interest_rate: interestRateFixed,
                capital_with_interest: capitalWithInterestFixed,
                ...otherValues
            });
            return await this.loanApplicationRepository.save(newLoanApplication);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async updateLoanApplication(id: string, updateLoanApplicationDto: UpdateLoanApplicationDTO, userLogged: User): Promise<LoanApplication | null> {
        try {
            const myLoanApplication = await this.loanApplicationRepository.findOneBy({id});
            if(updateLoanApplicationDto.status){
                const userRoles = userLogged.roles.map(role => role.name);

                if (userRoles.includes('investor')) {
                    myLoanApplication.investor = userLogged;
                }
            }
            // Verifica si se intenta cambiar de Aprobado o Rechazado a En Espera
            if (
                (myLoanApplication.status === LoanApplicationStatus.APPROVED || myLoanApplication.status === LoanApplicationStatus.REJECTED) &&
                updateLoanApplicationDto.status === LoanApplicationStatus.PENDING
            ) {
                throw new Error('Cannot change status back to [En Espera] from [Aprobado] or [Rechazado].');
                
            }
        
            // Actualiza el estado y la fecha de aprobación si se aprueba
            if (updateLoanApplicationDto.status === LoanApplicationStatus.APPROVED) {
                myLoanApplication.status = LoanApplicationStatus.APPROVED;
                myLoanApplication.approvement_application_date = new Date();
            } else if (updateLoanApplicationDto.status === LoanApplicationStatus.REJECTED) {
                myLoanApplication.status = LoanApplicationStatus.REJECTED;
                myLoanApplication.approvement_application_date = null; // Puedes dejar esto como null si no necesitas la fecha de rechazo
            } else {
                myLoanApplication.status = updateLoanApplicationDto.status;
            }
            return await this.loanApplicationRepository.save(myLoanApplication);
        } catch (error: any) {
            throw new Error(error.message);
        }
        
    }
}