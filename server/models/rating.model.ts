import { Schema, model } from 'mongoose';
import { IRatingModel, IRating } from "./../../types/rating";

export const RatingName = 'Rating';
const { Types } = Schema;

const RatingSchema = new Schema<IRatingModel<IRating>>({
  review_date: { type: Types.String },
  rate: { type: Types.Number },
  comment: { type: Types.String },
  location: { type: Object },
  timeStamp: {
    type: Types.String,
    required: true,
    default: Date.now()
  }
});

export const Rating = model<IRating>(RatingName, RatingSchema) as IRatingModel<IRating>;