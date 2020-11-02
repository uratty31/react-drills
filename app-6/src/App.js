import React, { Component } from 'react';
import './App.css';
import Todo from './Component/Todo';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      newTask: '',
      list: ['sleeping', 'cleaning', 'exercising']
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ newTask: value });
  }

  //add task will take things from newTask and add them to storeList. it wont do the thing
  //need to create a input field allowing people to create new tasks (mostly done)
  addTask = () => {
    const newList = [this.state.newTask, ...this.state.list]
    
    this.setState({ list: newList, newTask: '' })
  }

  render() {

    const listMapped = this.state.list.map((item, i) => {
      return (
        <Todo key={i} item={item} />
      )
    })

    return (
      <div className="App">
        <input value={this.state.newTask} onChange={e => this.handleChange(e.target.value)} type='text' />
        {listMapped}
        <button onClick={this.addTask}>Add Task</button>
      </div>
    );
  }
}
