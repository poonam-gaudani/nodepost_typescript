import { UserDocument } from "../model/user.model";
/**
 *
 * @param {*} json Convert json object to javascript object
 */
export declare const toObject: <Type>(json: Type) => Type;
export declare const generateJwt: (obj: any) => string;
export declare const removeFields: (obj: any, keys: string | string[], defaultFields?: boolean) => UserDocument;
