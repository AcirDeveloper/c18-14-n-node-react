import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Length, Min } from 'class-validator';
import { User } from '../../entities/user.entity';
import { LoanApplicationStatus } from '../../entities/loan-application.entity';

export class CreateLoanApplicationDTO {

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  loan_purpose: string;

  @IsNotEmpty()
  @Length(1, 200)
  loan_purpose_detail: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  capital: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Min(1, { message: 'Installments must be greater than 1' })
  loan_installments: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  interest_rate: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  capital_with_interest: number;
}

export class UpdateLoanApplicationDTO {

  @IsOptional()
  @IsString()
  investor?: User;

  @IsOptional()
  @IsInt()
  @IsPositive()
  capital?: number;

  @IsOptional()
  @IsInt()
  @Min(1, { message: 'Loan installments must be greater than 1' })
  loan_installments?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  interest_rate?: number;

  @IsOptional()
  @IsEnum(LoanApplicationStatus)
  status?: LoanApplicationStatus;
}