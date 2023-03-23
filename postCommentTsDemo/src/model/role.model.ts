import { Document, Schema, model, Types } from 'mongoose';

export interface IRole {
    name?: string;
};

export interface RoleDocument {
    _id: Types.ObjectId;
}

interface IRoleModel extends IRole, Document { }

const RoleSchema = new Schema({
    name: { type: String, require: true },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});


// });

export default model<IRoleModel>("Role", RoleSchema);
