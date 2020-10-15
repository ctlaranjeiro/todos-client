import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import UserPage from './components/UserPage';
import { loggedUserOnAPI } from './actions/auth';


class App extends Component {
  componentDidMount() {
    this.props.handleLoggedIn()
      .then(() => {
      localStorage.setItem("loggedin", true);
    });
  }

  // componentDidUpdate() {
  //   this.props.handleLoggedIn()
  //     .then(() => {
  //     localStorage.setItem("loggedin", true);
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Route exact path='/' render={(props) => <LandingPage {...props} />} /> */}
          <Route exact path='/' render={(props) => {
            if (this.props.loggedUser.username) {
              return <UserPage {...props} />
            } else {
              return <LandingPage {...props} />
            }
          }} />
          <Route exact path='/login' render={(props) => <LoginPage {...props} />} />
          <Route exact path='/signup' render={(props) => <SignupPage {...props} />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedUser: state.loggedUser
  }
}

const mapDispatchToProps = dispatch => ({
  handleLoggedIn: () => dispatch(loggedUserOnAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
