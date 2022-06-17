import { Document, PaginateModel } from "mongoose";

export interface IInbox extends Document {
  message?: string;
  date?: string;
  unread_messages?: number;
  staff?: Object;
  timeStamp: string;
}
export interface IInboxModel<T extends Document> extends PaginateModel<T> { }
