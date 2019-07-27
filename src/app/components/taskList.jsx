import React from 'react';
import { connect } from 'react-redux';
import { requestTaskCreation } from '../store/mutations';

export const TaskList = ({tasks, name, id, createNewTask}) => (
    <>
        <h3>
            {name}
        </h3>
        <div>
            {
                tasks.map(task => (<div key={task.id}>{task.name}</div>))
            }
        </div>
        <button onClick={() => createNewTask(id)}>
            Add
        </button>
    </>
)

function createNewTask() {

}

const mapDispatchToProps  = (dispatch, ownProps) => {
    return {
        createNewTask(id) {
            dispatch(requestTaskCreation(id));
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    let groupId = ownProps.id;
    return {
        name:ownProps.name,
        id: groupId,
        tasks: state.tasks.filter(item => item.group === groupId)

    }
}

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps) (TaskList)
