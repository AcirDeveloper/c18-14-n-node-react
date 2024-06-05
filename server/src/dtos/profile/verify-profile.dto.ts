import { IsDate, IsDateString, IsNotEmpty, IsOptional, IsString, IsUrl, Length, MaxLength } from "class-validator";

export class UpdateProfileDTO {
    @IsNotEmpty()
    @IsString()
    @Length(8, 13)
    dni: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(1,50)
    name: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(1, 50)
    last_name: string;

    @IsNotEmpty()
    @IsString()
    @Length(8, 14)
    phone: string;

    @IsOptional()
    @IsUrl()
    avatar: string;
  
    @IsNotEmpty()
    @MaxLength(10)
    @IsDateString()
    date_of_birth: Date;
  }