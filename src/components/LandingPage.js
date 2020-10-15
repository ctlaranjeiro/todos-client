import React, { Component } from 'react'
import Navigation from './Navigation';
import ListDisplay from './ListDisplay';
import { Link } from 'react-router-dom';


class LandingPage extends Component {
    render(){
        return(
            <div className="main-container">
                <Navigation />
                <div className="content-container flex-column">
                    <ListDisplay />
                    <p>*If you would like to save your tasks, <Link to="/login">login</Link> or <Link to="/signup">signup</Link> to access the full features.</p>
                </div>
            </div>
        )
    }
}

export default LandingPage;