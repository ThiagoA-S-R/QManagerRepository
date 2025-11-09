import { Request, Response } from 'express';
import * as taskService from '../services/taskService';

export const getTasks = async (_req: Request, res: Response) => {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const task = await taskService.createTask(req.body);
  res.status(201).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await taskService.updateTask(Number(id), req.body);
  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  await taskService.deleteTask(Number(id));
  res.status(204).send();
};
