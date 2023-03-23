"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose = require("mongoose");
const config_1 = require("../config");
const { dbUri } = config_1.default;
const connect = async () => {
    try {
        const connection = await mongoose.connect(`${dbUri}`);
        if (connection)
            console.log('Database Connected Successfully...');
    }
    catch (err) {
        console.log('\x1b[31m%s\x1b[0m', 'Error while connecting database\n');
        console.log(err);
    }
};
exports.connect = connect;
//# sourceMappingURL=database.js.map