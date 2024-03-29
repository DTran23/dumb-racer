import React, { Component } from "react";
import CarSlider from "./CarSlider";
import SocialMedia from "./SocialMedia";
import PlayNow from "./PlayNow";

import { BrowserRouter, Route, Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <PlayNow />
            <SocialMedia />
            <CarSlider />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default MainPage;
