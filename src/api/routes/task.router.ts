import { Router } from "express";
import TaskController from "../controllers/task.controller";

const router = Router();

router.get('/', TaskController.getTasks);
router.post('/', TaskController.addTask);
router.put('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);

export default router;
