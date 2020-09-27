import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginOnAPI } from '../actions/auth';
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
        this.props.handleLogin(username, password);
            // .then(() => {
            //     localStorage.setItem("loggedin", true);
            // });

        if(this.props.loggedUser){
            this.props.history.push(`/`);
        } else{
            console.log('something went wrong with login');
        }

        this.setState({username: '', password: ''})
    }


    render(){
        return(
            <div className="main-container">
                <Navigation />
                <div className="content-container flex-column">
                    <h1>Login Page</h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <input name="username" type='text' placeholder="username" value={this.state.username} onChange={this.handleChange} />
                        <input name="password" type='password' placeholder="password" value={this.state.password} onChange={this.handleChange} />
                        <input type="submit" value="Login" />
                    </form>
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

const mapDispatchToProps = dispatch => ({
    handleLogin: (username, password) => dispatch(loginOnAPI(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
