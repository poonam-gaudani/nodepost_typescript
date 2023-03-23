"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFields = exports.generateJwt = exports.toObject = void 0;
const jwt = require("jsonwebtoken");
const config_1 = require("../config");
const { secretKeys } = config_1.default;
/**
 *
 * @param {*} json Convert json object to javascript object
 */
// export const toObject = (json: any) => JSON.parse(JSON.stringify(json));
const toObject = (json) => JSON.parse(JSON.stringify(json));
exports.toObject = toObject;
/**
 *
 * @param {*} obj Pass object to generate jwt token
 */
const { jwtValue } = secretKeys;
const generateJwt = (obj) => jwt.sign(obj, jwtValue, { expiresIn: '1h' });
exports.generateJwt = generateJwt;
const removeFields = (obj, keys, defaultFields = true) => {
    var basicFields = ['createdAt', 'updatedAt', 'isDeleted', 'deletedBy', 'deletedAt', '__v'];
    keys = typeof keys == 'string' ? [keys] : keys || [];
    if (defaultFields)
        keys = keys.concat(basicFields);
    keys.forEach((key) => delete obj[key]);
    return obj;
};
exports.removeFields = removeFields;
//# sourceMappingURL=helper.js.map