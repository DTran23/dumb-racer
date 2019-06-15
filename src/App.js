import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TypingSpeed from './TypingSpeed'
import DisplayQuote from './DisplayQuote.js'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      words: [],
      typed: '',
      index: 0,
      fullPhrase:
        'Your self-image is the result of all you have given your subconscious mind as a database, so regardless of your background, what you are willing to become is the only reality that counts.',
      color: 'white',
      wordIndex: '0',
      userInput: "",
      char: 0,
      sec: 0,
      timerStart: false,
      timerFinished: false
    };
  }

  componentDidMount() {
    this.setState({ words: this.state.fullPhrase.split(' ') });
    const word = this.state.fullPhrase.split(' ')[0] + ' ';
    this.setState({ word });

    ReactDOM.findDOMNode(this).addEventListener('input', this._validate);
  }

  _validate = e => {
    e.preventDefault();

    const newEvent = e;

    if (e.target.value !== this.state.word.substring(0, e.target.value.length)) {
      this.setState({ color: 'red' });
    } else {
      this.setState({ color: 'white' });
    }

    if (e.target.value === this.state.word) {
      newEvent.target.value = '';

      const index = this.state.index + 1;
      const word = this.state.words[index] + ' ';

      this.setState({ index, word, color: 'white' });
    }
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">
        <DisplayQuote 
          style={{color: this.state.color}}
          word= {this.state.word}
          quote={this.state.fullPhrase}
          userInput={this.state.userInput}
          onUserInputChange={this.onUserInputChange}
        />
        <TypingSpeed second={this.state.sec} char={this.state.char} />
        </header>
      </div>
    );
  }

  onUserInputChange = (e) => {
    const value = e.target.value;
    this.setTimer();
    this.onFinish();
    this.setState({
      userInput: value,
      char: this.calculateCorrectChars(value)
    })
  }
  
  onFinish(userInput) {
    if (userInput === this.state.fullPhrase) {
      clearInterval(this.interval);
      this.setState({
        timerFinished: true
      })
    }
  }
  setTimer() {
    if (!this.state.timerStart) {
      this.setState({setTimer: true});
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return {sec: prevProps.sec + 1}
        })
      }, 1000)
    }
  }

  calculateCorrectChars(userInput) {
    const text = this.state.fullPhrase.replace(' ', '');
    return userInput.replace(' ', '').split('').filter((char, i) => char === text[i]).length;
  }
}

