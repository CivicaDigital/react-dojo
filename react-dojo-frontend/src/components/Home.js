import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="App-title">Welcome to React</h1>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
