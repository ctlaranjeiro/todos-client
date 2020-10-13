import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTaskAction, toggleTaskAction } from '../actions/tasks';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AddTask from './AddTask';
import styled from 'styled-components';

const Div = styled.div`
  background-color: ${props => props.listColor};
  border-radius: 50%;
`;

class BasicTodos extends Component {
    state = {
        completedTasksVisibile: false,
        isAnyCompleted: true
    }

    // checkIfAnyCompleted = () => {
    //     let isAnyCompleted = this.props.tasks.filter(task => task.completed === true);

    //     if(isAnyCompleted.length > 0){
    //         this.setState({
    //             isAnyCompleted: true
    //         })
    //     } else{
    //         this.setState({
    //             completedTasksVisibile: false,
    //             isAnyCompleted: false
    //         })

    //         // hides ul list for completed tasks
    //         document.getElementById("completedTasks").style.display = "none";
    //     }
    // }

    // toggleTask = (task) => {
    //     task.completed = !task.completed;
    //     this.props.handleToggleTask(task);
    //     this.checkIfAnyCompleted();
    // }

    // removeTask = (taskId) => {
    //     this.props.handleRemoveTask(taskId);
    // }

    // showHidden = () => {
    //     document.getElementById("completedTasks").style.display = "block";
    //     this.setState({
    //         completedTasksVisibile: true
    //     });
    // }

    // hideCompletedTasks = () => {
    //     document.getElementById("completedTasks").style.display = "none";
    //     this.setState({
    //         completedTasksVisibile: false
    //     });
    // }

    render() {
        return(
            <div className="center-list">
                <div className="list-title">
                    <Div listColor={this.props.lists.color}></Div>
                    <h3>{this.props.listName}</h3>
                </div>
                <hr />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    // handleRemoveTask: id => dispatch(removeTaskAction(id)),
    // handleToggleTask: task => dispatch(toggleTaskAction(task)),
});


export default connect(null, mapDispatchToProps)(BasicTodos);