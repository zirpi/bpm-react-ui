import * as React from 'react';

import { Task } from '../../model/task'
import { TaskTableComponent } from './taskTable';

import { useEffect } from "react";

interface Props {
  tasks: Array<Task>;
  loadTasks: () => any;
}


export const TaskListComponent = (props : Props) => {

  //useEffect (() => setState(state => ( { ...state, taskListReducer props.loadTasks() )   )

  useEffect( () => { props.loadTasks()}, [] );

  return (
    <div>
        <br/>
        <TaskTableComponent taskList={ props.tasks }  />
    </div>
  );
}

// <input type="submit" value="load" className="btn btn-default" onClick={() => props.loadTasks()} />