import { Schema, model } from 'mongoose';
import { ISearchHistoryModel, ISearchHistory } from "./../../types/search_history";

export const SearchHistoryName = 'SearchHistory';
const { Types } = Schema;

const SearchHistorySchema = new Schema<ISearchHistoryModel<ISearchHistory>>({
  query: {
    type: Types.String
  },
  timeStamp: {
    type: Types.String,
    required: true,
    default: Date.now()
  }
});

export const SearchHistory = model<ISearchHistory>(SearchHistoryName, SearchHistorySchema) as ISearchHistoryModel<ISearchHistory>;