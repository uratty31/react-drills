import React, { Component } from 'react';
//this is where we will create new tasks as strings and store them until transfering them to list.js this state will also contain our newTask state and is a smart component

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            newTask: ''
        }
    }

    handleChange(value) {
        this.setState({ newTask: value });
    }

    addTask = () => {
        this.props.getTask(this.state.newTask)
        this.setState({ newTask: '' })
    }

    render() {
        return(
            <div>
            <input value={this.state.newTask} onChange={e => this.handleChange(e.target.value)}/>
            <button onClick={this.addTask}>Submit</button>
            </div>
        )
    }
}

export default NewTask