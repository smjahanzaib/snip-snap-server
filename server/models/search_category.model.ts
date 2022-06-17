import { Schema, model } from 'mongoose';
import { ISearchCategoryModel, ISearchCategory } from "./../../types/search_category";

export const SearchCategoryName = 'SearchCategory';
const { Types } = Schema;

const SearchCategorySchema = new Schema<ISearchCategoryModel<ISearchCategory>>({
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

export const SearchCategory = model<ISearchCategory>(SearchCategoryName, SearchCategorySchema) as ISearchCategoryModel<ISearchCategory>;