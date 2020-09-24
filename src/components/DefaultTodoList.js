import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTaskAction, toggleTaskAction } from '../actions/tasks';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AddTask from './AddTask';

class BasicTodos extends Component {
    state = {
        completedTasksVisibile: false,
        isAnyCompleted: true
    }

    checkIfAnyCompleted = () => {
        let isAnyCompleted = this.props.tasks.filter(task => task.completed === true);

        if(isAnyCompleted.length > 0){
            this.setState({
                isAnyCompleted: true
            })
        } else{
            this.setState({
                completedTasksVisibile: false,
                isAnyCompleted: false
            })

            // hides ul list for completed tasks
            document.getElementById("completedTasks").style.display = "none";
        }
    }

    toggleTask = (task) => {
        task.completed = !task.completed;
        this.props.handleToggleTask(task);
        this.checkIfAnyCompleted();
    }

    removeTask = (taskId) => {
        this.props.handleRemoveTask(taskId);
    }

    showHidden = () => {
        document.getElementById("completedTasks").style.display = "block";
        this.setState({
            completedTasksVisibile: true
        });
    }

    hideCompletedTasks = () => {
        document.getElementById("completedTasks").style.display = "none";
        this.setState({
            completedTasksVisibile: false
        });
    }

    render() {
        return(
            <div className="center-list">
                <h3>TO DO'S</h3>
                <hr />
                <div className="todos-list overflow-auto">
                    {/* to complete tasks */}
                    <ul className="overflow-auto">
                        {this.props.tasks.map(task => {
                            if(task.completed === false){
                                return <li key={task.id}>
                                    <span style={{
                                        textDecoration: task.completed ? 'line-through' : 'none'
                                    }} 
                                        onClick={() => this.toggleTask(task)}>
                                        {task.task}
                                    </span>
                                    <button className="btn-task" onClick={() => this.removeTask(task.id)}>X</button>
                                </li>
                            }                            
                        })}
                        <li><AddTask /></li>
                        {this.state.isAnyCompleted && !this.state.completedTasksVisibile && 
                            <li className="completed-li">
                                <span className="completed-text" onClick={() => this.showHidden()}>Show completed</span>
                                <button className="btn-icon" onClick={() => this.showHidden()}><FaChevronDown /></button>
                            </li>
                        }
                        {this.state.isAnyCompleted && this.state.completedTasksVisibile &&
                            <li className="completed-li">
                                <span className="completed-text" onClick={() => this.hideCompletedTasks()}>Hide completed</span>
                                <button className="btn-icon" onClick={() => this.hideCompletedTasks()}><FaChevronUp /></button>
                            </li>
                        }

                        {/* completed tasks */}
                        <ul className="completed-tasks" id="completedTasks">
                            {this.props.tasks.map(task => {
                                if(task.completed === true){
                                    return <li key={task.id}>
                                        <span style={{
                                            textDecoration: task.completed ? 'line-through' : 'none',
                                            color: task.completed ? 'gray' : 'black',
                                            fontWeight: task.completed ? '400' : '400',
                                            fontStyle: task.completed ? 'italic' : 'normal',
                                        }} 
                                            onClick={() => this.toggleTask(task)}>
                                            {task.task}
                                        </span>
                                        <button onClick={() => this.removeTask(task.id)}>X</button>
                                    </li>
                                }                            
                            })}
                        </ul>
                    </ul>

                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
    }
}

const mapDispatchToProps = dispatch => ({
    handleRemoveTask: id => dispatch(removeTaskAction(id)),
    handleToggleTask: task => dispatch(toggleTaskAction(task)),
});


export default connect(mapStateToProps, mapDispatchToProps)(BasicTodos);