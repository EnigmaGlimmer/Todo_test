import mongoose from 'mongoose';

export interface ITaskModel {
  id: string;
  name: string;
  dueDate: Date;
  isCompleted: boolean;
};

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Task', TaskSchema);