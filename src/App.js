import React, { Component } from 'react';
import './App.css';
import Head from './Head';
// import { Link } from 'react-router'
import Meetings from './components/Meetings/Meetings';
import Cs from './components/Cs/Cs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <div>
          <Meetings />
          <Cs />
        </div>
      </div>
    );
  }
}

export default App;
