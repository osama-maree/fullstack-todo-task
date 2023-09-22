import { Router } from "express";
import {  RetrieveTodos } from "../controller/todoController.js";
const router = Router();
router.get("/", RetrieveTodos);
export default router;
