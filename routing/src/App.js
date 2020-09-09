import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Wrapper from './components/Wrapper';
import All from './components/All';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Wrapper path="/:input" />
        <All path="/:input/:textcolor/:bgcolor" />

      </Router>      
    </div>
  );
}

export default App;
