"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const auth_1 = require("../controllers/auth");
const validate_1 = require("../utils/validate");
const auth_2 = require("../rules/auth");
router.post('/signup', (0, validate_1.validate)(auth_2.signupValidation), auth_1.signUp);
router.post('/login', /*validate(login),*/ auth_1.login);
exports.default = router;
//# sourceMappingURL=auth.js.map