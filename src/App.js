import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      wordIndex: '0'
    };
  }

  componentDidMount() {
    this.setState({ words: this.state.fullPhrase.split(' ') });
    const word = this.state.fullPhrase.split(' ')[0] + ' ';
    this.setState({ word });

    document.addEventListener('input', this._validate, false);
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
    const style = {
      color: this.state.color
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.fullPhrase}</p>
          <p style={style}>{this.state.word}</p>
          <input id="test-id" />
        </header>
      </div>
    );
  }
}
