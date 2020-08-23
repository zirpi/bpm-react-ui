
import { combineReducers} from 'redux';
import { taskListReducer, taskListState } from './taskListReducer';
import { taskLoadReducer, taskViewState } from './taskLoadReducer';

export interface State {
    taskListReducer : taskListState;
    taskLoadReducer: taskViewState;
};

export const reducers = combineReducers<State>({
    taskListReducer,
    taskLoadReducer

});