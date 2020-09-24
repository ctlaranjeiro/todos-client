import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTaskAction } from '../actions/tasks';
import { AiOutlinePlus } from "react-icons/ai";


class AddTask extends Component {
    state = {
        newTaskName: ''
    }

    generateId = () => {
        return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleAddNewTask = (event) => {
        event.preventDefault();

        let newTask = {
            id: this.generateId(),
            task: this.state.newTaskName,
            completed: false
        }
        // using Redux to update state with the function below
        this.props.handleAddTask(newTask);

        this.setState({newTaskName: ''})
    }

    render() {
        return (
            <form className="form-addTask" onSubmit={this.handleAddNewTask}>
                <input id="todo" type="text" name="newTaskName" value={this.state.newTaskName} onChange={this.handleChange} placeholder="Add new..." />
                <button className="btn-task"><AiOutlinePlus /></button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    handleAddTask: task => dispatch(addTaskAction(task))
});

export default connect(null, mapDispatchToProps)(AddTask);