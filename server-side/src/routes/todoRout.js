import { Router } from "express";
import {
  AddTodo,
  DeleteTask,
  RetrieveTodos,
  UpdateTask,
} from "../controller/todoController.js";
const router = Router();
router.get("/", RetrieveTodos);
router.post("/", AddTodo);
router.put("/:id", UpdateTask);
router.delete("/:id", DeleteTask);
export default router;
