import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import './App.css';
import { TaskListContainer, TaskViewContainer, TaskAddContainer } from './components';

import { Route } from 'react-router-dom'

import {Fragment} from 'react';
//import {pure} from 'recompose';
import { Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Fragment>
      <nav>
        <Link to="/tasklist">TaskList</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/addtask">AddTask</Link>
      </nav>

        <Route path="/tasklist" render={props => <TaskListContainer {...props} />} />
        <Route path="/addtask" render={props => <TaskAddContainer {...props} />} />
        <Route path="/taskview/:id" render={props => <TaskViewContainer {...props} />} />
      </Fragment>
      
    </div>
  );
}

export default App;


