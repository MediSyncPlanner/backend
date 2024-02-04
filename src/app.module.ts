import { Module } from '@nestjs/common';
import { PatientModule } from './Patient/patient.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://marianovijarra:admin@cluster0.9gomqep.mongodb.net/',
    ),
    PatientModule,
  ],
})
export class AppModule {}
