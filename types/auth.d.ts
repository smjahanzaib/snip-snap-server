
export enum Role {
	admin = 'admin',
	user = 'user'
  }
export interface IloginResponse {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    accessToken: string;
    date: Date,
    role: { type: Types.String; default: Role.user; enum: Role; }
}