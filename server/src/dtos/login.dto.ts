import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class LoginUserDTO {
      
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(6, 20)
    password: string;
}