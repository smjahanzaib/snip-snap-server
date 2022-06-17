import { Schema, model } from 'mongoose';
import { IFavoritesModel, IFavorites } from "./../../types/favorites";

export const FavoritesName = 'Favorites';
const { Types } = Schema;

const FavoritesSchema = new Schema<IFavoritesModel<IFavorites>>({
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
  timeStamp: {
    type: Types.String,
    required: true,
    default: Date.now()
  }
});

export const Favorites = model<IFavorites>(FavoritesName, FavoritesSchema) as IFavoritesModel<IFavorites>;