import { Document, PaginateModel } from "mongoose";

export interface ICategory extends Document {
  title?: string;
  image?: string;
  timeStamp: string;
}
export interface ICategoryModel<T extends Document> extends PaginateModel<T> { }
