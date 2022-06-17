import { Document, PaginateModel } from "mongoose";

export interface IRating extends Document {
  review_date?: string;
  rate?: number;
  comment?: string;
  location?: Object;
  timeStamp: string;
}
export interface IRatingModel<T extends Document> extends PaginateModel<T> { }
