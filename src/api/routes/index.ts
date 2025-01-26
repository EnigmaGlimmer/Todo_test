import { Router } from "express";
import AuthRouter from "@/api/routes/auto.router";
import TaskRouter from "@/api/routes/task.router";

const router = Router();

router.use('/auth', AuthRouter);
router.use('/tasks', TaskRouter);

export default router;