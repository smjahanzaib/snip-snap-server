import { Schema, model } from 'mongoose';
import { ILocationModel, ILocation } from "./../../types/location";

export const LocationName = 'Location';
const { Types } = Schema;

const LocationSchema = new Schema<ILocationModel<ILocation>>({
  name: { type: Types.String },
  rate: { type: Types.Number },
  ratings: { type: Types.String },
  address: { type: Types.String },
  city: { type: Types.String },
  phone: { type: Types.String },
  email: { type: Types.String },
  website: { type: Types.String },
  description: { type: Types.String },
  main_photo: { type: Types.String },
  gender_specific: { type: Types.String },
  business_hours: { type: Types.Array },
  coordinates: { type: Types.Array },
  photos: { type: Types.Array },
  staff: { type: Types.Array },
  services: { type: Types.Array },
  cancelation_policy: { type: Types.String },
  nearby_locations: { type: Types.Array },
  reviews: { type: Types.Array },
  timeStamp: {
    type: Types.String,
    required: true,
    default: Date.now()
  }
});

export const Location = model<ILocation>(LocationName, LocationSchema) as ILocationModel<ILocation>;