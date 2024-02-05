import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Patient } from '../schemas/patient.schema';
import { Model } from 'mongoose';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<Patient>,
  ) {}

  findAll() {
    return this.patientModel.find();
  }

  findOne(id: string) {
    return this.patientModel.findById(id);
  }

  create(createPatient: CreatePatientDto) {
    const createdPatient = this.patientModel.create(createPatient);
    return createdPatient;
  }

  delete(id: string) {
    return this.patientModel.findByIdAndDelete(id);
  }

  update(id: string, user: UpdatePatientDto) {
    return this.patientModel.findByIdAndUpdate(id, user, { new: true });
  }
}
