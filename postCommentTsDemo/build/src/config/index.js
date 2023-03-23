"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
exports.default = {
    dbUri: process.env.DB_URI,
    port: process.env.PORT,
    bcrypt: {
        salt: process.env.SALT,
    },
    secretKeys: {
        jwtValue: process.env.JWT
    },
    expiredTime: {
        jwtExpiredTime: process.env.JWTEXPIREDTIME
    }
};
//# sourceMappingURL=index.js.map