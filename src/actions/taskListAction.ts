import * as AT from '../constants/ActionTypes'
import { Task } from '../model/task'
import { taskApi } from '../api/taskApi'

export const taskListRequestCompleted = (tasks: Task[]) => {
  return {
    type: AT.TASK_LIST_COMPLETED,
    payload: tasks
  }
}

export const taskListRequest = () => (dispatcher: (arg0: { type: string; payload: Task[] }) => any) => {
  const promise = taskApi.list();

  promise.then(
    (data) => dispatcher(taskListRequestCompleted(data))
  );

  return promise;
}
