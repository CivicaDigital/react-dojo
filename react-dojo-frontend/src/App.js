import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Jumbotron } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar>
        <Jumbotron>
          <h1 className="App-title">Welcome to React</h1>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Jumbotron>
      </div>
    );
  }
}

export default App;
