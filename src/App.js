import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import UserPage from './components/UserPage';
import { loggedUserOnAPI } from './actions/auth';


class App extends Component {
  // componentDidMount() {
  //   this.props.handleLoggedIn();
  //   //   .then(() => {
  //   //   localStorage.setItem("loggedin", true);
  //   // });
  // }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={(props) => <LandingPage {...props} />} />
          <Route path='/login' render={(props) => <LoginPage {...props} />} />
          <Route path='/:username' render={(props) => <UserPage {...props} />} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleLoggedIn: () => dispatch(loggedUserOnAPI())
});

export default connect(null, mapDispatchToProps)(App);
