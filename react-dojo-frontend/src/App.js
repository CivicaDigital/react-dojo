import React, { Component } from "react";
import "./App.css";
import { Jumbotron } from "react-bootstrap";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Jumbotron>
          <h1 className="App-title">Welcome to React</h1>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Jumbotron>
      </div>
    );
  }
}

export default App;
