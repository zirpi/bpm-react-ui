import { connect } from 'react-redux';
import { taskListRequest } from '../../actions'
import { State } from '../../reducers'
import { TaskListComponent } from './taskList'

const mapStateToProps = (state: State) => {
    return {
        tasks: state.taskListReducer
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
      loadTasks: () => { return dispatch( taskListRequest() ) }
    };
}
  
export const TaskListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskListComponent);