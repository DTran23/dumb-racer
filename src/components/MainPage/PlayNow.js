import React from "react";
import { Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PlayNow.scss";
import ferarriSideView from "../../images/ferarri-side.png";

const PlayNow = () => {
  return (
    <div className="PlayNow-container">
      <div className="PlayNow-content">
        <div className="PlayNow-current">
          <h5>Current Car</h5>
          <h3>Lamborghini Aventador</h3>
        </div>
        <div className="PlayNow-specs">
          <h5>Specs</h5>
          <h6>Max Speed: 300km/h</h6>
          <h6>Accerlation: 100km/s</h6>
        </div>
        <img src={ferarriSideView} alt="ferrari side view" />
      </div>
      <Button className="PlayNow-btn" variant="outline-light">
        Play Now
      </Button>
    </div>
  );
};

export default PlayNow;
