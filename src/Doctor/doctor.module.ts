import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorsService } from './doctor.service';
import { Doctor, DoctorSchema } from '../schemas/doctor.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Doctor.name,
        schema: DoctorSchema,
      },
    ]),
  ],
  controllers: [DoctorController],
  providers: [DoctorsService],
})
export class DoctorModule {}
