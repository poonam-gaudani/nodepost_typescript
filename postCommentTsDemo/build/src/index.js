"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes");
const config_1 = require("./config");
const database = require("./middlewares/database");
const { port } = config_1.default;
const app = express();
database.connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
//# sourceMappingURL=index.js.map