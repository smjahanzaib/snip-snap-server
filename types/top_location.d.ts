import { Document, PaginateModel } from "mongoose";

export interface ITopLocation extends Document {
  rate?: number;
  ratings?: number;
  address?: string;
  city?: string;
  phone?: string;
  email?: string;
  website?: string;
  description?: string;
  main_photo?: string;
  timeStamp: string;
}
export interface ITopLocationModel<T extends Document> extends PaginateModel<T> { }
