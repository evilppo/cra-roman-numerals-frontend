import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { result: 'rez' };
    this.updateResult = this.updateResult.bind(this);
    this.postApi = this.postApi.bind(this);


    //this.hello = this.hello.bind(this);
  }


  test = () => {
    console.log("TEEEST");
  }

  updateResult = () => {

      var rez = this.postApi()
      console.log(rez);
      //let romertall = this.postApi();
      //console.log(romertall);
    //this.setState({
      //    result: this.postApi()
      //  });
  }

  hello = () => {
      fetch("/api/")
          .then(response => response.text())
          .then(message => {
            console.log(message);
          });
  };

  postApi = () => {
  return fetch('/api/decimal-to-roman/', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        decimal: 42
      })
  }).then(function(response) {
    console.log(response);
    return response.json(); })
    .then(function(myJson) {
      return myJson.number.decimal; })
    .then(function(decimal) {
      console.log(decimal);
      return decimal;
    });

    //console.log(myJson.number.decimal);
    //console.log(this.state.result);
    //this.setState({ result: myJson.number.decimal})

    //console.log(myJson.number.decimal);
    //console.log("test");
    //console.log(this.state.result);
    //this.setState(result: myJson.number.decimal)
    //this.setState(result: "test");


}



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

          <button onClick={this.test}>
            HELLO!
          </button>


          <button onClick={this.postApi}>
              POST
          </button>

          <button onClick={this.updateResult}>
              SET RES
          </button>

          <div>
          {this.state.result}
          </div>

      </div>
    );
  }
}

export default App;
