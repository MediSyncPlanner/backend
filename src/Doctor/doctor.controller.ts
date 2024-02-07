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
import { DoctorsService } from './doctor.service';
import { CreateDoctorDto } from '../dto/create-doctor.dto';
import { UpdateDoctorDto } from '../dto/update-doctor.dto';

@Controller('doctors')
export class DoctorController {
  constructor(private doctorService: DoctorsService) {}

  @Get()
  findAll() {
    return this.doctorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const doctor = await this.doctorService.findOne(id);
    if (!doctor) throw new NotFoundException('Doctor not found');
    return doctor;
  }

  @Post()
  async create(@Body() body: CreateDoctorDto) {
    try {
      return await this.doctorService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Doctor already exists');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const doctor = await this.doctorService.delete(id);
    if (!doctor) throw new NotFoundException('Doctor not found');
    return doctor;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateDoctorDto) {
    const doctor = await this.doctorService.update(id, body);
    if (!doctor) throw new NotFoundException('Doctor not found');
    return doctor;
  }
}
