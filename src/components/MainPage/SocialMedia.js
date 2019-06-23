import React from "react";
import { Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div>
      <Nav defaultActiveKey="/home" className="SocialMedia flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SocialMedia;
