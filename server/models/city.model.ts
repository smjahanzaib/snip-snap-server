import { Schema, model } from 'mongoose';
import { ICityModel, ICity } from "./../../types/city";

export const CityName = 'City';
const { Types } = Schema;

const CitySchema = new Schema<ICityModel<ICity>>({
  city_name: {
    type: Types.String,
  },
  coordinates: {
    type: Types.Array,
  },
  state_name: {
    type: Types.String,
  },
  timeStamp: {
    type: Types.String,
    required: true,
    default: Date.now()
  }
});

export const City = model<ICity>(CityName, CitySchema) as ICityModel<ICity>;