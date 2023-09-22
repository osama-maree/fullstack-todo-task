import { Router } from "express";
import {
  AddTodo,
  DeleteTask,
  RetrieveTodos,
  UpdateTask,
} from "../controller/todoController.js";
import { validation } from "../middleware/validation.js";
import { AddTodoValidation } from "../controller/todoValidation.js";
const router = Router();
router.get("/", RetrieveTodos);
router.post("/", validation(AddTodoValidation), AddTodo);
router.put("/:id", UpdateTask);
router.delete("/:id", DeleteTask);
export default router;
