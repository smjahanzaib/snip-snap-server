import { Schema, model } from 'mongoose';
import { IAppointmentModel, IAppointment } from "./../../types/appointment";

export const AppointmentName = 'Appointment';
const { Types } = Schema;

const AppointmentSchema = new Schema<IAppointmentModel<IAppointment>>({
  location: {
    type: Object,
  },
  totalPrice: {
    type: Types.Number,
  },
  totalDuration: {
    type: Types.Number,
  },
  status: {
    type: Types.String,
  },
  requestDate: {
    type: Types.String,
  },
  requestTime: {
    type: Types.String,
  },
  code: {
    type: Types.String,
  },
  notes: {
    type: Types.String,
  },
  services: {
    type: Types.Array,
  },
  timeStamp: {
    type: Types.String,
    required: true,
    default: Date.now()
  }
});

export const Appointment = model<IAppointment>(AppointmentName, AppointmentSchema) as IAppointmentModel<IAppointment>;