import React, { Component } from "react";
import PlayGame from "./components/PlayGame/PlayGame";
import MainPage from "./components/MainPage/MainPage";
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
            <Route path="/" exact component={MainPage} />
            <Route path="/play" exact component={PlayGame} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
