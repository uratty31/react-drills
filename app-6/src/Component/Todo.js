import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <p>{this.props.item}</p>
        )
    }
}

export default Todo;