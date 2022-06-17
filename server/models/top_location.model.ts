import { Schema, model } from 'mongoose';
import { ITopLocationModel, ITopLocation } from "./../../types/top_location";

export const TopLocationName = 'TopLocation';
const { Types } = Schema;

const TopLocationSchema = new Schema<ITopLocationModel<ITopLocation>>({
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

export const TopLocation = model<ITopLocation>(TopLocationName, TopLocationSchema) as ITopLocationModel<ITopLocation>;