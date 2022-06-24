import { Document, PaginateModel } from "mongoose";

export enum Role {
	admin = 'admin',
	user = 'user'
  }
export interface IUser extends Document {
	role: { type: Types.String, default: Role.user, enum: Role },
	firstName: string;
	lastName: string;
	email: string;
	phone?: string;
	address?: string;
	city?: string;
	country?: string;
	postalCode?: string;
	profilePicture?: string;
	password?: string;
	provider?: string;
	salt?: string;
	date?: Date;
	resetPasswordToken?: string;
	facebook?: {};
	twitter?: {};
	google?: {};
	github?: {};
}
export interface IUserModel<T extends Document> extends PaginateModel<T> { }
