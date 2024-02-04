import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PatientsService } from './patient.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Patient, PatientSchema } from '../schemas/patient.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Patient.name,
        schema: PatientSchema,
      },
    ]),
  ],
  controllers: [PatientController],
  providers: [PatientsService],
})
export class PatientModule {}
