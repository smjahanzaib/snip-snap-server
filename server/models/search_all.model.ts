import { Schema, model } from 'mongoose';
import { ISearchAllModel, ISearchAll } from "./../../types/search_all";

export const SearchAllName = 'SearchAll';
const { Types } = Schema;

const SearchAllSchema = new Schema<ISearchAllModel<ISearchAll>>({
  name: { type: Types.String },
  rate: { type: Types.Number },
  ratings: { type: Types.Number },
  address: { type: Types.String },
  city: { type: Types.String },
  phone: { type: Types.String },
  email: { type: Types.String },
  website: { type: Types.String },
  description: { type: Types.String },
  main_photo: { type: Types.String },
  coordinates: { type: Types.Array },
  timeStamp: {
    type: Types.String,
    required: true,
    default: Date.now()
  }
});

export const SearchAll = model<ISearchAll>(SearchAllName, SearchAllSchema) as ISearchAllModel<ISearchAll>;