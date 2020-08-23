import * as React from "react";
import { Task } from '../../model/task'
import { TaskHeaderComponent } from "./taskHeader";
import { TaskRowComponent } from "./taskRow";
import Table from 'react-bootstrap/Table'

interface Props {
    taskList: Task[];
  }
  
  export const TaskTableComponent = (props: Props) => {
    return (
      <Table striped bordered hover>
        <TaskHeaderComponent/>
        <tbody>
          {
            props.taskList.map(
              (task: Task) =>
                <TaskRowComponent 
                    key={task.id} 
                    task = {task} />
            )
          }
        </tbody>
      </Table>
    );
  };