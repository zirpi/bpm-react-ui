import { connect } from 'react-redux';
import { taskListRequest } from '../../actions'
import { State } from '../../reducers'
import { TaskAddComponent } from './taskAdd'
import { taskApi } from '../../api/taskApi';

const mapStateToProps = (state: any) => {
    return { ...state  };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
      addTask: (variables: any) => { 
          taskApi
            .addTask(variables)
            .then( data => { console.log(data); ownProps.history.push("/tasklist"); }  ) 
        }
    };
}
  
export const TaskAddContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskAddComponent);