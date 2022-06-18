import { Document, PaginateModel } from "mongoose";

export interface ILocation extends Document {
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
  gender_specific?: string;
  business_hours?: Array<any>;
  coordinates?: Array<any>;
  photos?: Array<any>;
  staff?: Array<any>;
  services?: Array<any>;
  cancelation_policy?: string;
  nearby_locations?: Array<any>;
  reviews?: Array<any>;
  timeStamp: string;
}
export interface ILocationModel<T extends Document> extends PaginateModel<T> { }
