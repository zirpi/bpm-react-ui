import * as React from "react";
import { Task } from "../../model/task";

import { Link} from 'react-router-dom';

interface Props {
  task: Task;
}

export const TaskRowComponent = (props: Props) => {
    return (
      <tr>
        <td> 
            <Link to={"/taskview/" + props.task.id}>
             { props.task.id } 
             </Link>
        </td>
        <td>
          <span>{props.task.created}</span>
        </td>
        <td>
          <span>{props.task.customerName}</span>
        </td>
        <td>
          <span>{props.task.amount}</span>
        </td>
        <td>
          <span>{props.task.currentStep}</span>
        </td>
        <td>
          <span>{props.task.finalDecision}</span>
        </td>
        <td>
          <span>{props.task.variables}</span>
        </td>
      </tr>
    );
  };