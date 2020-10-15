import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupOnAPI } from '../actions/auth';
import Navigation from './Navigation';



class LoginPage extends Component{
    state = {
        username: '',
        password: ''
    }


    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        let username = this.state.username;
        let password = this.state.password

        // using Redux to update state with the function below
        this.props.handleSignup(username, password).then(() => {
            this.props.history.push(`/`);
            this.setState({username: '', password: ''})
        })
    }


    render(){
        return(
            <div className="main-container">
                <Navigation />
                <div className="content-container flex-column">
                    <h1>Glad you're joining!</h1>
                    <p>Just one small step...</p>
                    <form className="auth-form" onSubmit={this.handleFormSubmit}>
                        <input name="username" type='text' placeholder="username" value={this.state.username} onChange={this.handleChange} />
                        <input name="password" type='password' placeholder="password" value={this.state.password} onChange={this.handleChange} />
                        <input className="btn-auth" type="submit" value="Signup" />
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    handleSignup: (username, password) => dispatch(signupOnAPI(username, password))
});

export default connect(null, mapDispatchToProps)(LoginPage);
