import { Document, Schema, model, Types } from 'mongoose';
import * as bcryptJs from 'bcryptjs';
import config from '../config';
const { bcrypt } = config;
const { salt }: any = bcrypt


export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Types.ObjectId;
};

export interface UserDocument extends IUser {
    _id?: Types.ObjectId;
    token?: string;
}

interface IUserModel extends IUser, Document { }

const UserSchema = new Schema({
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
    if (!this.isModified('password')) return next();
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

export default model<IUserModel>("User", UserSchema);
