import { Document, PaginateModel } from "mongoose";

export interface ISearchHistory extends Document {
  query?: string;
  timeStamp: string;
}
export interface ISearchHistoryModel<T extends Document> extends PaginateModel<T> { }
