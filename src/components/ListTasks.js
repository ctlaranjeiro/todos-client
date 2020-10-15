import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTaskAction, toggleTaskAction } from '../actions/tasks';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AddTask from './AddTask';
import styled from 'styled-components';

const Div = styled.div`
    width: 15px;
    height: 15px;
    background-color: ${props => props.bgColor};
    border-radius: 50%;
    margin-right: 5px;
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
            <div className="content-container flex-column">
                <div className="center-list">
                    <div className="list-title">
                        <Div bgColor={this.props.currentList.color}></Div>
                        <h3>{this.props.currentList.listName}</h3>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    // handleRemoveTask: id => dispatch(removeTaskAction(id)),
    // handleToggleTask: task => dispatch(toggleTaskAction(task)),
});


export default connect(null, mapDispatchToProps)(BasicTodos);