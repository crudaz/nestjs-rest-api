import { Document, PassportLocalDocument } from 'mongoose';

export interface IUser extends PassportLocalDocument {
    readonly firstName: string;
    readonly lastName: string;
    readonly rol: string;
    readonly imageProfile: string;
    readonly username: string;
    readonly password: string;
}