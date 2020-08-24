import { connect } from 'react-redux';
import { taskLoadRequest } from '../../actions'
import { State } from '../../reducers'
import { TaskViewComponent } from './taskView'

import { taskApi } from '../../api/taskApi';

const mapStateToProps = (state: State, ownProps: any) => {
    return {
        task: state.taskLoadReducer,
        id: ownProps.match.params.id,
        history: ownProps.history
    };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
      loadTask: (id: string) => { return dispatch( taskLoadRequest(id) ) },
      completeTask: (id: string, rejected: boolean) => {         
            taskApi
                .complete(id, { 'isRejected': rejected } )
                .then( resp =>  ownProps.history.push("/tasklist") ) }
    };
}

export const TaskViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( TaskViewComponent );