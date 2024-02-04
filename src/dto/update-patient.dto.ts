import {
  IsString,
  IsBoolean,
  IsNumber,
  IsEmail,
  IsOptional,
  IsDate,
} from 'class-validator';

export class UpdatePatientDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsNumber()
  @IsOptional()
  dni?: number;

  @IsString()
  @IsOptional()
  address?: string;

  @IsDate()
  @IsOptional()
  birthDate?: string;

  @IsBoolean()
  @IsOptional()
  active?: boolean;
}
