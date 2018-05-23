import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

 
class Text extends Component {
  render() {
     return (
        <div>
           <span style={{color:this.props.color}}>{this.props.name}</span>
        </div>
     );
  }
}  


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       color: props.color,
       name: props.name
    }
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Hello, <Text color="green" name="Kavitha!!!" /></h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;