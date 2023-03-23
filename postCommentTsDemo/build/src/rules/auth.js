"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupValidation = void 0;
const yup = require("yup");
exports.signupValidation = yup.object({
    body: yup.object({
        firstName: yup.string().required().max(30).trim().label("Firstname"),
        lastName: yup.string().required().max(30).trim().label("Lastname"),
        email: yup.string().required().email().trim().lowercase().label("Email"),
        password: yup.string().required().min(8).max(32).label("Password")
    })
});
// const signupValidation = yup.object({
//     body: yup.object({
//         url: yup.string().url().required(),
//         title: yup.string().min(8).max(32).required(),
//         content: yup.string().min(8).max(255).required(),
//         contact: yup.string().email().required(),
//     }),
//     params: yup.object({
//         id: yup.number().required(),
//     }),
// });
//# sourceMappingURL=auth.js.map