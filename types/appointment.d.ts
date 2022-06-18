import { Document, PaginateModel } from "mongoose";

export interface IAppointment extends Document {
	location: Object;
  totalPrice: number;
  totalDuration: number;
  status: string;
  requestDate: string;
  requestTime: string;
  code: string;
  notes: string;
  services: Array<any>;
  timeStamp: string;
}
export interface IAppointmentModel<T extends Document> extends PaginateModel<T> { }
