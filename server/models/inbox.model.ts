import { Schema, model } from 'mongoose';
import { IInboxModel, IInbox } from "./../../types/inbox";

export const InboxName = 'Inbox';
const { Types } = Schema;

const InboxSchema = new Schema<IInboxModel<IInbox>>({
  message: { type: Types.String },
  date: { type: Types.String },
  unread_messages: { type: Types.Number },
  staff: { type: Object },
  timeStamp: {
    type: Types.String,
    required: true,
    default: Date.now()
  }
});

export const Inbox = model<IInbox>(InboxName, InboxSchema) as IInboxModel<IInbox>;