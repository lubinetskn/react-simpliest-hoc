import React, { Component } from 'react';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Demo1 />
        <Demo2 message="Hello there!" />
      </div>
    );
  }
}

export default App;
