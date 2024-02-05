import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Patient {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ required: true })
  dni: number;

  @Prop()
  address: string;

  @Prop()
  birthDate: string;

  @Prop({ default: true })
  active: boolean;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
