import {
  IsString,
  IsBoolean,
  IsNumber,
  IsEmail,
  IsOptional,
  IsNotEmpty,
  IsDate,
} from 'class-validator';

export class CreatePatientDto {
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
  dni: number;

  @IsString()
  @IsOptional()
  address: string;

  @IsDate()
  @IsOptional()
  birthDate: string;

  @IsBoolean()
  @IsOptional()
  active?: boolean;
}
