import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.test = this.test.bind(this);
    this.hello = this.hello.bind(this);
  }


  test = () => {
    console.log("TEEEST");
  }

  hello = () => {
      fetch("/api/")
          .then(response => response.text())
          .then(message => {
            console.log(message);
          });
  };



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <button onClick={this.hello}>
            FETCH!
          </button>

      </div>
    );
  }
}

export default App;
