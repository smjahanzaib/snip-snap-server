import { Document, PaginateModel } from "mongoose";

export interface ISearchCategory extends Document {
  name?: string;
  rate?: number;
  ratings?: number;
  address?: string;
  city?: string;
  phone?: string;
  email?: string;
  website?: string;
  description?: string;
  main_photo?: string;
  coordinates?: Array<any>;
  timeStamp: string;
}
export interface ISearchCategoryModel<T extends Document> extends PaginateModel<T> { }
