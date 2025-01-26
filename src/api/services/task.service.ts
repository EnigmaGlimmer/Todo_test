import { ErrorCode } from "@/constants/errors";
import TaskCollection, { ITaskModel } from "@/models/task.model";

class TaskService {
  private _tasks: ITaskModel[] = [];

  async getTasks(page: number = 0, size: number = 0): Promise<ITaskModel[]> {
    try {
      if (!process.env.USING_DB) 
        return this._tasks;

      const tasks = await TaskCollection.find();
      console.log("Fetched Tasks", tasks);

      return tasks as ITaskModel[];

    } catch (error) {
      throw Error(ErrorCode.DB_FETCHING_FAILED.code);
    }
  }

  async addTask(payload: ITaskModel): Promise<ITaskModel> {
    try {
      if (!process.env.USING_DB) {
        this._tasks.push(payload);
        return payload;
      };

      const _newTask = new TaskCollection({
        ...payload
      });

      await _newTask.save();
      console.log("Adding Task:", _newTask);

      return _newTask as ITaskModel;
    } catch (error) {
      console.log("add Task failed:", payload, error);
      throw Error(ErrorCode.DB_ADD_FAILED.code);
    }
  };

  async updateTask(id: string, payload: ITaskModel): Promise<ITaskModel> {
    try {
      //if DB is not connected.
      if (process.env.USING_DB) {
        this._tasks = this._tasks.map((task) => task.id === id ? { task, ...payload } : task);
        const founds = this._tasks.find((task) => task.id === id);

        return founds[0];
      }
      console.log(id, payload);

      const updateTask = await TaskCollection.findByIdAndUpdate(
        id,
        { name: payload.name, dueDate: payload.dueDate, isCompleted: payload.isCompleted },
        { new: true}
      );

      console.log("Updated Task:", updateTask);
      return updateTask as ITaskModel;

    } catch (error) {
      console.log("Update Failed", error);
      throw Error(ErrorCode.DB_UPDATE_FAILED.code);
    }
  };

  async deleteTask(id: string): Promise<ITaskModel> {
    try {
      if(!process.env.USING_DB){
        const founds = this._tasks.find((task) => task.id === id );
        this._tasks.filter((task) => task.id !== id);
  
        return founds[0];
      }
  
      const deleteTask = await TaskCollection.findByIdAndDelete(id);
      if(deleteTask) {
        console.log("Delete Task", deleteTask);
        return deleteTask as ITaskModel;
      }
    } catch (error) {
      console.log("Delete Failed", error);
      throw Error(ErrorCode.DB_DELETE_FAILED.code);
    }
  };
}

export default new TaskService;