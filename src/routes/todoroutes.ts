import { Router } from "express";
import {
  getTodos,
  getTodosById,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todosController";

const router = Router();

router.post("/", addTodo);

router.get("/", getTodos);

router.get("/:id", getTodosById);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;
