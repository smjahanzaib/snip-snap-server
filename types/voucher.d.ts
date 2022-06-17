import { Document, PaginateModel } from "mongoose";

export interface IVoucher extends Document {
  code?: string;
  status?: string;
  redemption_datetime?: string;
  due_datetime?: string;
  amount?: number;
  service?: string;
  special_terms?: string;
  location?: Array<any>;
  timeStamp: string;
}
export interface IVoucherModel<T extends Document> extends PaginateModel<T> { }
