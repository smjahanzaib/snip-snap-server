import { Schema, model } from 'mongoose';
import { IVoucherModel, IVoucher } from "./../../types/voucher";

export const VoucherName = 'Voucher';
const { Types } = Schema;

const VoucherSchema = new Schema<IVoucherModel<IVoucher>>({
  code: { type: Types.String },
  status: { type: Types.String },
  redemption_datetime: { type: Types.String },
  due_datetime: { type: Types.String },
  amount: { type: Types.Number },
  service: { type: Types.String },
  special_terms: { type: Types.String },
  location: { type: Types.Array },
  timeStamp: {
    type: Types.String,
    required: true,
    default: Date.now()
  }
});

export const Voucher = model<IVoucher>(VoucherName, VoucherSchema) as IVoucherModel<IVoucher>;