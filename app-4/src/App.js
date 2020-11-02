import React, {Component} from 'react';
import './App.css';

class App extends Component {
 constructor(){
   super();
    this.state = {
      username: '',
      password: ''
    }
    //this.handleSubmit = this.handleSubmit.bind(this)
 }
 


handleUsername(value) {
  this.setState({ username: value });
}

handlePassword(value) {
this.setState({ password: value})
}

handleSubmit = () => {
  console.log(this)
  window.alert(`username: ${this.state.username}, password: ${this.state.password}`)
}

  render(){
   return (
     <div className="App">
     <input  onChange = {e => this.handleUsername(e.target.value)} placeholder = 'Enter Username'/>
     <input  onChange = {e => this.handlePassword(e.target.value)} placeholder = 'Enter Password'/>
     <button onClick = {this.handleSubmit}>Submit</button>
    </div>
  ); 
}
}

export default App;
