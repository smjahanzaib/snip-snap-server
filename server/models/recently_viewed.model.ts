import { Schema, model } from 'mongoose';
import { IRecentlyViewedModel, IRecentlyViewed } from "./../../types/recently_viewed";

export const RecentlyViewedName = 'RecentlyViewed';
const { Types } = Schema;

const RecentlyViewedSchema = new Schema<IRecentlyViewedModel<IRecentlyViewed>>({
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

export const RecentlyViewed = model<IRecentlyViewed>(RecentlyViewedName, RecentlyViewedSchema) as IRecentlyViewedModel<IRecentlyViewed>;