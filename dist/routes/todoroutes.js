"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todosController_1 = require("../controllers/todosController");
var router = express_1.Router();
router.post("/", todosController_1.addTodo);
router.get("/", todosController_1.getTodos);
router.get("/:id", todosController_1.getTodosById);
router.patch("/:id", todosController_1.updateTodo);
router.delete("/:id", todosController_1.deleteTodo);
exports.default = router;
//# sourceMappingURL=todoroutes.js.map