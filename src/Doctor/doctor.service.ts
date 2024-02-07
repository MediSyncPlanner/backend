import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor } from '../schemas/doctor.schema';
import { Model } from 'mongoose';
import { CreateDoctorDto } from '../dto/create-doctor.dto';
import { UpdateDoctorDto } from '../dto/update-doctor.dto';

@Injectable()
export class DoctorsService {
  constructor(@InjectModel(Doctor.name) private doctorModel: Model<Doctor>) {}

  findAll() {
    return this.doctorModel.find();
  }

  findOne(id: string) {
    return this.doctorModel.findById(id);
  }

  create(createDoctor: CreateDoctorDto) {
    const createdDoctor = this.doctorModel.create(createDoctor);
    return createdDoctor;
  }

  delete(id: string) {
    return this.doctorModel.findByIdAndDelete(id);
  }

  update(id: string, user: UpdateDoctorDto) {
    return this.doctorModel.findByIdAndUpdate(id, user, { new: true });
  }
}
