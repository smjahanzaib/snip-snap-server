import { Document, PaginateModel } from "mongoose";

export interface IRecentlyViewed extends Document {
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
  timeStamp: string;
}
export interface IRecentlyViewedModel<T extends Document> extends PaginateModel<T> { }
