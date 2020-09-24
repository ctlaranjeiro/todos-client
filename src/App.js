import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
