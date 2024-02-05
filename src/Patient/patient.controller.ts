import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  NotFoundException,
  ConflictException,
  HttpCode,
} from '@nestjs/common';
import { PatientsService } from './patient.service';
import { CreatePatientDto } from 'src/dto/create-patient.dto';
import { UpdatePatientDto } from 'src/dto/update-patient.dto';
// import { Patient } from '../schemas/patient.schema';

@Controller('patients')
export class PatientController {
  constructor(private patientService: PatientsService) {}

  @Get()
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const patient = await this.patientService.findOne(id);
    if (!patient) throw new NotFoundException('Patient not found');
    return patient;
  }

  @Post()
  async create(@Body() body: CreatePatientDto) {
    try {
      return await this.patientService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Patient already exists');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const patient = await this.patientService.delete(id);
    if (!patient) throw new NotFoundException('Patient not found');
    return patient;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdatePatientDto) {
    const patient = await this.patientService.update(id, body);
    if (!patient) throw new NotFoundException('Patient not found');
    return patient;
  }
}
