import { Document, PaginateModel } from "mongoose";

export interface ICity extends Document {
  city_name?: string;
  coordinates?: Array<any>;
  state_name?: string;
  timeStamp: string;
}
export interface ICityModel<T extends Document> extends PaginateModel<T> { }
