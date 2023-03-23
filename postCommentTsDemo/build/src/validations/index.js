"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => async (req, res, next) => {
    try {
        let validationSchema = {};
        if (req.body && Object.keys(req.body).length > 0)
            validationSchema.body = req.body;
        if (req.query && Object.keys(req.query).length > 0)
            validationSchema.query = req.query;
        if (req.params && Object.keys(req.params).length > 0)
            validationSchema.params = req.params;
        console.log("********&&&&&&&&&&&&& validationSchema **********8");
        await schema.validate(validationSchema);
        return next();
    }
    catch (err) {
        return res.status(500).json({ type: err.name, message: err.message });
    }
};
exports.validate = validate;
//# sourceMappingURL=index.js.map