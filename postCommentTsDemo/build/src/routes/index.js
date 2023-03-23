"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("./auth");
const router = (0, express_1.Router)();
router.get('/', (req, res) => { res.send('Welcome to post-comment demo'); });
router.use('/auth', auth_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map