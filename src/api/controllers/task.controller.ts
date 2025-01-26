import { Request, Response } from "express";
import TaskService from "../services/task.service";

class TaskController {
    getTasks(req: Request, res: Response) {
        const { page, size } = req.query;
        TaskService.getTasks(Number(page), Number(size))
            .then(tasks => {
                res.status(200).json(tasks);
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            })
    }

    addTask(req: Request, res: Response) {
        const task = req.body;
        TaskService.addTask(task)
            .then((task) => {
                res.status(200).json(task);
            })
            .catch(error => {
                res.status(500).json({error: error.message});
            })
    }

    updateTask(req: Request, res: Response) {
        const task = req.body;
        const taskId = req.params.id;

        TaskService.updateTask(taskId, task)
            .then(_task => {
                res.status(200).json(_task);
            })
            .catch(error => {
                res.status(500).json({error: error.message});
            })
    };

    deleteTask(req: Request, res: Response) {
        const taskId = req.params.id;

        TaskService.deleteTask(taskId)
            .then(_task => {
                res.status(200).json(_task);
            })
            .catch(error => {
                res.status(500).json({error: error.message});
            })
    }
}

export default new TaskController;