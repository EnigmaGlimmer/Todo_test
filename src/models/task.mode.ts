import mongoose from 'mongoose';

export interface ITaskModel {
  id: string;
  name: string;
  dueDate: Date;
  isCompleted: boolean;
};