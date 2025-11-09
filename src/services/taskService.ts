import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllTasks = async () => {
  return prisma.task.findMany();
};

export const createTask = async (data: { title: string; description?: string; done?: boolean }) => {
  return prisma.task.create({ data });
};

export const updateTask = async (id: number, data: any) => {
  return prisma.task.update({ where: { id }, data });
};

export const deleteTask = async (id: number) => {
  return prisma.task.delete({ where: { id } });
};
