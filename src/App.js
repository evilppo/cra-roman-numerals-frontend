import React, { Component } from 'react';
import logo from './colosseum.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
            result: '',
            input: ''
          };
  }
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


 postApiRomanToDecimal = (numeral) => {

           fetch('/api/roman-to-decimal/', {
            method: 'post',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                romanNumeral: numeral
              })
          })
          .then(response => {
                if(response.status !== 200) {
                    throw Error('Invalid roman numeral');
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
              return myJson.number.decimal})
            .then(decimal => {
              console.log(decimal);
              this.setState({ result: decimal})
            });


}
onFormSubmitRegularNumber = (evt) => {
    let num = evt.target.value;
   if(num === ''){
   this.setState({ result: ''})
   }
   if(num>0){
        this.postApiDecimalToRoman(evt.target.value);
   }
};

onFormSubmitRomanNumeral = (evt) => {
let numeral = evt.target.value.toUpperCase();
    if(numeral === ''){
       this.setState({ result: ''})
       }
  if(numeral !== ''){
    console.log('onFormSubmitRomanNumeral');
    console.log('evt.target.value: ', evt.target.value);
    this.postApiRomanToDecimal(numeral);
  }
};


  render() {
    return (
      <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Eiriks Roman Numeral Converter</h1>
            </header>
            <p className="App-intro">
              Type in integer or roman numeral:
            </p>

          <form onChange={this.onFormSubmitRegularNumber}>
            <input placeholder='Input regular number' ref='submitRegularNumber'/>
          </form>

          <form onChange={this.onFormSubmitRomanNumeral}>
            <input placeholder='Input roman numeral' ref='SubmitRomanNumeral'/>
          </form>

          <div>
            {(this.state.result && "RESULT:")}
          </div>

          <div>
            {this.state.result}
          </div>


      </div>
    );
  }
}

export default App;
