import * as AT from '../constants/ActionTypes';
import { Task } from '../model/task';

export type taskListState =  Task[];

export const taskListReducer =  (state : taskListState = [], action: any) => {
  switch (action.type) {
    case AT.TASK_LIST_COMPLETED:
      return handleTaskListRequestCompletedAction(state, action.payload);
  }

  return state;
};

const handleTaskListRequestCompletedAction = (state : taskListState, tasks: any) => {
    return tasks;
}