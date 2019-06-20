import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import "./App.css";
import TypingSpeed from "./TypingSpeed";
import DisplayQuote from "./DisplayQuote.js";
import Background from "./Background.js";

// import Car1 from "./Car1";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      words: [],
      index: 0,
      fullPhrase:
        "Your self-image is the result of all you have given your subconscious mind as a database, so regardless of your background, what you are willing to become is the only reality that counts.",
      userInput: "",
      char: 0,
      sec: 0,
      carPositioning: 0,
      timerStart: false,
      timerFinished: false,
      finishLine: false
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Background
            position={this.state.carPositioning}
            onFinish={this.state.timerFinished}
          />
          <DisplayQuote
            style={{ color: this.state.color }}
            word={this.state.word}
            quote={this.state.fullPhrase}
            userInput={this.state.userInput}
            onUserInputChange={this.onUserInputChange}
            onFinish={this.state.timerFinished}
            onFinishButton={this.onRestart}
          />
          <TypingSpeed
            second={this.state.sec}
            char={this.state.char}
            word={this.state.word}
          />
        </header>
      </div>
    );
  }

  onUserInputChange = e => {
    let value = e.target.value;

    if (this.state.timerFinished) {
      e.target.value = "";
    }

    this.onStartTimer();
    this.onFinishTimer(value);
    // this.carPositioningHandler(value);
    this.setState({
      userInput: value,
      char: this.calculateCorrectChars(value),
      carPositioning: this.calculateCorrectChars(value) * 10
    });
  };

  calculateCorrectChars(userInput) {
    //remove whitespace
    const text = this.state.fullPhrase.replace(" ", "");
    //remove whitespace from user input and turn into array
    userInput = userInput.replace(" ", "").split("");
    //return how many characters user is typing correctly
    console.log(userInput);
    return userInput.filter((char, i) => char === text[i]).length;
  }

  onStartTimer() {
    if (!this.state.timerStart) {
      this.setState({ timerStart: true });
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return { sec: prevProps.sec + 1 };
        });
      }, 1000);
    }
  }

  onFinishTimer(userInput) {
    if (userInput === this.state.fullPhrase) {
      clearInterval(this.interval);
      this.setState({
        timerFinished: true
      });
    }
  }
}
