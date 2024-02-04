import { Controller, Get, Post, Delete, Put, Body } from '@nestjs/common';
import { PatientsService } from './patient.service';
// import { Patient } from '../schemas/patient.schema';

@Controller('patients')
export class PatientController {
  constructor(private patientService: PatientsService) {}

  @Get()
  findAll() {
    return 'get all users';
  }

  @Get(':id')
  findOne() {
    return 'get one user';
  }

  @Post()
  create(@Body() body: any) {
    console.log(body);

    return 'create user';
  }

  @Delete(':id')
  delete() {
    return 'delete user';
  }

  @Put(':id')
  update() {
    return 'update user';
  }
}
