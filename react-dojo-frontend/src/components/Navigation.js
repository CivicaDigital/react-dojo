import React, { Component } from "react";
import logo from "../logo.svg";
import { Navbar } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
