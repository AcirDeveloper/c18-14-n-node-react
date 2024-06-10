import { IsNotEmpty, IsNumber, IsPositive, IsUUID, Min } from "class-validator";

export class MakePaymentDTO {
    @IsNotEmpty()
    @IsUUID()
    userId: string;
  
    @IsNotEmpty()
    @IsUUID()
    orderId: string;
  
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    @Min(1, { message: 'Amount must be greater than 1' })
    amount: number;

}

export class WithdrawFromAccountDTO {
    @IsNotEmpty()
    @IsUUID()
    userId: string;
  
    @IsNotEmpty()
    @IsUUID()
    accountId: string;
  
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    @Min(1, { message: 'Amount must be greater than 1' })
    amount: number;

}

export class RechargeAccountDTO {
    @IsNotEmpty()
    @IsUUID()
    userId: string;
  
    @IsNotEmpty()
    @IsUUID()
    accountId: string;
  
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    @Min(5, { message: 'Amount must be greater than 5' })
    amount: number;

}