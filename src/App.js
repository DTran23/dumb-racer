import React, { Component } from "react";
import PlayGame from "./components/PlayGame/PlayGame";
import CarSlider from "./components/MainPage/CarSlider";
import SocialMedia from "./components/MainPage/SocialMedia";
import Header from "./components/Header/Header";

import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <SocialMedia />
            <Route path="/" exact component={CarSlider} />
            <Route path="/play" exact component={PlayGame} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
