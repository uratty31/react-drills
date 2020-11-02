import React, { Component } from 'react';
import List from './Component/List';
import ToDo from './Component/ToDo';
import NewTask from './Component/NewTask';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  getTask = (task) => {
    const newList = [task, ...this.state.list]
    this.setState({list: newList})
  }

  render() {

    const listMapped = this.state.list.map((item, i) => {
      return (
        <ToDo key={i} item={item} />
      )
    })

    return (
      <div className="App">
        <NewTask getTask = {this.getTask}/>
        {listMapped}
      </div>
    );
  }
}

export default App;
