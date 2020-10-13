import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListTasks from './ListTasks';
import Navigation from './Navigation';

class UserPage extends Component {
    render() {
        return (
            <div className="main-container">
                <Navigation />
                <span>Welcome, {this.props.loggedUser.username}!</span>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedUser: state.loggedUser
    }
}


export default connect(mapStateToProps)(UserPage);
