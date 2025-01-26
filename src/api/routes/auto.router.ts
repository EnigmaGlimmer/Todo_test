import { Router } from "express";
import TaskController from "../controllers/task.controller";

const router = Router();

router.post("/signin", TaskController.getTasks);
router.post("/signup", TaskController.getTasks);

export default router;
