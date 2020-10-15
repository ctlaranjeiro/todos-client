import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListDisplay from './ListDisplay';
import ListTasks from './ListTasks';
import Navigation from './Navigation';

class UserPage extends Component {
    state = {
        currentList: this.props.loggedUser.username && this.props.loggedUser.lists[0]
    }
    
    handleSelectedList = (currentList) => {
        this.setState({
            currentList
        });
    }

    render() {
        return (
            <div className="main-container">
                <Navigation selectedList={this.handleSelectedList} />
                <div className="content-container flex-column">
                    {/* <span>Welcome, {this.props.loggedUser.username}!</span> */}
                    {/* <ListTasks currentList={this.state.currentList} /> */}
                    <ListDisplay currentList={this.state.currentList} />
                </div>
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
