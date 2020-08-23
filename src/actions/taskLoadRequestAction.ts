import * as AT from '../constants/ActionTypes'
import { Task } from '../model/task'
import { taskApi } from '../api/taskApi'

export const taskLoadRequestCompleted = (task: Task) => {
  return {
    type: AT.TASK_NAVIGATE_COMPLETED,
    payload: task
  }
}

export const taskLoadRequest1 = (id: string) => (dispatcher: any) => {
  const promise = taskApi.get(id);
  promise.then( data => dispatcher(taskLoadRequestCompleted(data) ) );
  return promise;
}
