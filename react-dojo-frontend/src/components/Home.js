import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import UserDetails from "./UserDetails";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="App-title">Welcome to React</h1>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Jumbotron>
        <UserDetails />
      </div>
    );
  }
}

export default Home;
