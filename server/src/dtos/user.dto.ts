import { ArrayNotEmpty, IsArray, IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 20)
  password: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  roles: string[];
}

export class UpdateUserDTO {
  email?: string;
  
  @IsOptional()
  @IsString()
  @Length(6, 20)
  password?: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  roles?: string[];
  
  @IsOptional()
  @IsBoolean()
  is_verified?: boolean;
  
  @IsOptional()
  @IsBoolean()
  is_cancelled?: boolean;
}

export type payload = {
  id: string;
};