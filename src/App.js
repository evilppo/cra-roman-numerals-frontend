import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { result: '',
                    input: ''
          };
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

  postApi = (num) => {

   fetch('/api/decimal-to-roman/', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        decimal: num
      })
  }).then(response => {
    return response.json()})
    .then(myJson =>{
      console.log(myJson);
      return myJson.number.romanNumeral})
    .then(numeral => {
      console.log(numeral);
      this.setState({ result: numeral})
    });

}

onFormSubmitRegularNumber = (evt) => {
  evt.preventDefault();
  console.log(this.refs.name.value);
  this.postApi(this.refs.name.value);

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
{/*

          <button onClick={this.test}>
            HELLO!
          </button>


          <button onClick={this.postApi}>
              POST
          </button>
*/}




          <form onChange={this.onFormSubmitRegularNumber}>
            <input placeholder='Input regular number' ref='name'/>
          </form>

          <div>
          RESULT:
          </div>

          <div>
          {this.state.result}
          </div>
          <div />

      </div>
    );
  }
}

export default App;
