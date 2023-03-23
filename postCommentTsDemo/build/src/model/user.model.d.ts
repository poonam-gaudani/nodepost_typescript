/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document, Types } from 'mongoose';
export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Types.ObjectId;
}
export interface UserDocument extends IUser {
    _id?: Types.ObjectId;
    token?: string;
}
interface IUserModel extends IUser, Document {
}
declare const _default: import("mongoose").Model<IUserModel, {}, {}, {}>;
/**
*  Check email is unique or not
*/
export default _default;
