import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
            result: '',
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

  postApiDecimalToRoman = (num) => {

           fetch('/api/decimal-to-roman/', {
            method: 'post',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                decimal: num
              })
          })
          .then(response => {
                if(response.status !== 200) {
                    throw Error('Number must be less than 3000');
                    }
                else{
                    return response;}
                })
                .catch( error =>{
                                  console.log(error)
                                  alert(error);
                                  window.location.reload();
                             })

          .then((response) => {
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
    let num = evt.target.value;
   if(num>0){
        console.log('hei');
        this.postApiDecimalToRoman(evt.target.value);
   }


};

onFormSubmitRomanNumeral = (evt) => {

  console.log('onFormSubmitRomanNumeral');
  console.log('evt.target.value: ', evt.target.value);
  //this.postApiDecimalToRoman(evt.value);

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


          <button onClick={this.postApiDecimalToRoman}>
              POST
          </button>
*/}




          <form
                onChange={this.onFormSubmitRegularNumber}>

            <input placeholder='Input regular number' ref='submitRegularNumber'/>
          </form>

          <form
                onChange={this.onFormSubmitRomanNumeral}>

            <input placeholder='Input roman numeral' ref='SubmitRomanNumeral'/>
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
