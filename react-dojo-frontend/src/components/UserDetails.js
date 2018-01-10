import React, { Component } from "react";
import { Panel, Image } from "react-bootstrap";

class UserDetails extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: {
          title: "",
          first: "",
          last: ""
        },
        thumbnail: ""
      }
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=1")
      .then(apiResults => {
        return apiResults.json();
      })
      .then(apiResultsAsJson => {
        let randomUser = apiResultsAsJson.results[0];
        return randomUser;
      })
      .then(randomUser => {
        let userData = this.state.user;
        return { randomUser, userData };
      })
      .then(randomUserAndNewUserData => {
        let { randomUser, userData } = randomUserAndNewUserData;
        userData.thumbnail = randomUser.picture.large;
        return { randomUser, userData };
      })
      .then(randomUserAndNewUserData => {
        let { randomUser, userData } = randomUserAndNewUserData;
        userData.name = randomUser.name;
        return userData;
      })
      .then(newUserData => {
        this.setState({ user: newUserData });
      });
  }
  getUsersFullname = user => {
    let { first, last } = user.name;
    return (
      first.charAt(0).toUpperCase() +
      first.slice(1) +
      " " +
      last.charAt(0).toUpperCase() +
      last.slice(1)
    );
  };

  getPanelHeaderStyle = () => {
    return { fontSize: "30px" };
  };

  getPanelFooter = () => {
    return <div>&nbsp;</div>;
  };
  render() {
    let usersFullname = this.getUsersFullname(this.state.user);
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <Panel
          style={this.getPanelHeaderStyle()}
          footer={this.getPanelFooter()}
          header={usersFullname}
          bsStyle="info"
        >
          <Image
            src={this.state.user.thumbnail}
            alt={usersFullname}
            circle
            thumbnail
          />
        </Panel>
      </div>
    );
  }
}

export default UserDetails;
