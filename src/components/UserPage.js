import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserPage extends Component {
    render() {
        return (
            <div>
                Welcome, {this.props.loggedUser.username}!
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
