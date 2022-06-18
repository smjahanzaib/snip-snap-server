import { Schema, model } from 'mongoose';
import { ICategoryModel, ICategory } from "./../../types/category";

export const CategoryName = 'Category';
const { Types } = Schema;

const CategorySchema = new Schema<ICategoryModel<ICategory>>({
  title: {
    type: Types.String,
  },
  image: {
    type: Types.String,
  },
  timeStamp: {
    type: Types.String,
    required: true,
    default: Date.now()
  }
});

export const Category = model<ICategory>(CategoryName, CategorySchema) as ICategoryModel<ICategory>;