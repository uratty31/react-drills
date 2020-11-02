import React from 'react';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    // this sets the current state as a
    this.state = {
      message: ''
    };
  }

  handleChange(value) {
    this.setState({ message: value });
  }

  render() {
    return (
      <div className='App'>
        <input onChange={e => this.handleChange(e.target.value)} type='text' />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;