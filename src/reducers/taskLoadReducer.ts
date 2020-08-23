import * as AT from '../constants/ActionTypes';
import { Task } from '../model/task';

export type taskViewState = Task;

export const taskLoadReducer =  (state : taskViewState = new Task(), action: any) => {
    switch (action.type) {
      case AT.TASK_NAVIGATE_COMPLETED:
        return handleTaskLoadRequestCompletedAction(state, action.payload);
    }
  
    return state;
  };
  
  const handleTaskLoadRequestCompletedAction = (state : taskViewState, task: any) => {
      return task;
  }