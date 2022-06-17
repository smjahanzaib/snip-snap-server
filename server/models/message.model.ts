import { Schema, model } from 'mongoose';
import { IMessageModel, IMessage } from "./../../types/message";

export const MessageName = 'Message';
const { Types } = Schema;

const MessageSchema = new Schema<IMessageModel<IMessage>>({
  staff: { type: Object },
  location: { type: Object },
  messages: { type: Types.Array },
  timeStamp: {
    type: Types.String,
    required: true,
    default: Date.now()
  }
});

export const Message = model<IMessage>(MessageName, MessageSchema) as IMessageModel<IMessage>;