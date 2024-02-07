import {
  IsString,
  IsBoolean,
  IsNumber,
  IsEmail,
  IsOptional,
  IsNotEmpty,
  IsDate,
} from 'class-validator';

export class CreateDoctorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  registryNumber: string;

  @IsNumber()
  @IsNotEmpty()
  dni: number;

  @IsString()
  @IsOptional()
  address: string;

  @IsDate() // ------> no encuentro el formato de fecha necesario para que lo acepte!
  @IsOptional()
  birthDate: string;

  @IsBoolean()
  @IsOptional()
  active?: boolean;
}
