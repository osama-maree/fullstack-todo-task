import { Router } from "express";
import {
  AddTodo,
  DeleteTask,
  RetrieveTodos,
  UpdateTask,
} from "../controller/todoController.js";
import { validation } from "../middleware/validation.js";
import { AddTodoValidation, DeleteTaskValidation, UpdateTaskValidation } from "../controller/todoValidation.js";
const router = Router();
router.get("/", RetrieveTodos);
router.post("/", validation(AddTodoValidation), AddTodo);
router.put("/:id",validation(UpdateTaskValidation), UpdateTask);
router.delete("/:id",validation(DeleteTaskValidation) ,DeleteTask);
export default router;
