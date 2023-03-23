import { UserDocument } from "../model/user.model";
import * as jwt from 'jsonwebtoken'
import config from '../config';
const { secretKeys } = config;
import { Types } from 'mongoose';

/**
 *
 * @param {*} json Convert json object to javascript object
 */
// export const toObject = (json: any) => JSON.parse(JSON.stringify(json));

export const toObject = <Type>(json: Type): Type => JSON.parse(JSON.stringify(json));

/**
 *
 * @param {*} obj Pass object to generate jwt token
 */
const { jwtValue }: any = secretKeys
export const generateJwt = (obj: any): string => jwt.sign(obj, jwtValue, { expiresIn: '1h' });

export const removeFields = (obj: any, keys: string | string[], defaultFields = true): UserDocument => {
    var basicFields = ['createdAt', 'updatedAt', 'isDeleted', 'deletedBy', 'deletedAt', '__v'];
    keys = typeof keys == 'string' ? [keys] : keys || [];
    if (defaultFields) keys = keys.concat(basicFields);
    keys.forEach((key: any) => delete obj[key]);
    return obj;
};