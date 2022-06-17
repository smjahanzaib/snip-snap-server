import { Document, PaginateModel } from "mongoose";

export interface IFavorites extends Document {
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
export interface IFavoritesModel<T extends Document> extends PaginateModel<T> { }
