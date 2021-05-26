"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var todoroutes_1 = __importDefault(require("./routes/todoroutes"));
var body_parser_1 = require("body-parser");
var config_1 = require("./config");
var app = express_1.default();
app.use(body_parser_1.json());
app.use("/todos", todoroutes_1.default);
app.use(function (err, req, res, next) {
    console.log("object");
    res.sendStatus(500).json({ message: err.message });
});
app.listen(config_1.PORT);
//# sourceMappingURL=app.js.map