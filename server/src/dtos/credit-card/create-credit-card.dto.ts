import {IsCreditCard, IsDate, IsNotEmpty, IsOptional, IsString, Length, Matches } from 'class-validator';
import { Profile } from '../../entities/profile.entity';

export class CreateCreditCardDTO {

    @IsNotEmpty()
    @IsString()
    owner_full_name: string;
  
    @IsNotEmpty()
    @Length(16)
    @IsCreditCard({message: 'Ingrese una tarjeta de crédito válida'})
    target_number: string;

    @IsNotEmpty()
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La fecha debe tener el formato YYYY-MM-DD' })
    due_date: Date;

    @IsNotEmpty()
    @Matches(/^[0-9]{3}$/, { message: 'El código de verificación debe contener solo 3 números' })
    cvv_code: string;

    @IsOptional()
    @IsString()
    profile: Profile;
}