import React, { Component } from 'react'
import BasicTodos from './DefaultTodoList';
import Navigation from './Navigation';

class LandingPage extends Component {
    render(){
        return(
            <div className="main-container">
                <Navigation />
                <div className="content-container flex-column">
                    <BasicTodos />
                    <p>*If you would like to save your tasks, login or signup to access the full features.</p>
                </div>
            </div>
        )
    }
}

export default LandingPage;