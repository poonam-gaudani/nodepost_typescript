"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptJs = require("bcryptjs");
const config_1 = require("../config");
const { bcrypt } = config_1.default;
const { salt } = bcrypt;
;
const UserSchema = new mongoose_1.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, default: null },
    role: { type: 'ObjectId', ref: "Role", default: null },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});
/**
*  Encrypt password
*/
UserSchema.pre(/^save$/, async function (next) {
    if (!this.isModified('password'))
        return next();
    const hash = await bcryptJs.hash(this.password, parseInt(salt));
    this.password = hash;
    next();
});
/**
*  Check email is unique or not
*/
// UserSchema.pre(/^save$/, true, async function (next, done) {
//     try {
//         const self = this;
//         const record = await mongoose.models['user'].findOne({ _id: { $ne: self._id }, email: self.email, isDeleted: false });
//         record ? done(new APIError({ status: 409, message: `"email" already exists` })) : done();
//         next();
//     }
//     catch (err) { done(err); next(); }
// });
exports.default = (0, mongoose_1.model)("User", UserSchema);
//# sourceMappingURL=user.model.js.map