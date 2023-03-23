/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document, Types } from 'mongoose';
export interface IRole {
    name?: string;
}
export interface RoleDocument {
    _id: Types.ObjectId;
}
interface IRoleModel extends IRole, Document {
}
declare const _default: import("mongoose").Model<IRoleModel, {}, {}, {}>;
export default _default;
