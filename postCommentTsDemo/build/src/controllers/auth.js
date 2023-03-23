"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signUp = void 0;
const user_model_1 = require("../model/user.model");
const role_model_1 = require("../model/role.model");
const helper_1 = require("../utils/helper");
const signUp = async (req, res, next) => {
    try {
        let payload = req.body;
        const role = await role_model_1.default.findOne({ name: ('user') }, '_id');
        if (!role)
            return res.status(422).json({ message: "It seems that the system role are not generated yet." });
        payload.role = role._id;
        let user = await user_model_1.default.create(payload);
        const body = { _id: user._id, firstName: user.firstName, email: user.email };
        const token = (0, helper_1.generateJwt)({ user: body });
        user = (0, helper_1.toObject)(user);
        user.token = "Bearer " + token;
        return res.status(200).json({ data: (0, helper_1.removeFields)(user, ['password', 'role']), message: "Signup done successfully." });
    }
    catch (err) {
        next(err);
    }
};
exports.signUp = signUp;
const login = async (req, res, next) => {
    return res.status(400).json({ message: "Login successfully" });
    // passport.authenticate('login', async (err, user, info) => {
    //    try {
    //      if (err || !user) throw new APIError({status: 401, message: err ? err.message : 'Unauthorized access'});
    //      req.login(user, { session: false }, async (err) => {
    //        if (err) throw new APIError();
    //        const body = { _id: user._id, firstName: user.firstName, email: user.email};
    //        const token = generateJwt({ user: body });
    //        user = toObject(user);
    //        user.token = "Bearer "+token;
    //        return res.sendJson(200, { data: user, message: info.message });
    //      });
    //    }
    //    catch (err) {
    //      next(err); }
    //  })(req, res, next);
};
exports.login = login;
//# sourceMappingURL=auth.js.map