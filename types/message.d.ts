import { Document, PaginateModel } from "mongoose";

export interface IMessage extends Document {
  staff?: Object;
  location?: Object;
  messages?: Array<any>;
  timeStamp: string;
}
export interface IMessageModel<T extends Document> extends PaginateModel<T> { }
