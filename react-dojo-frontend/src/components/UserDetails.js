import React, { Component } from "react";
import {
  Panel,
  Image,
  Button,
  FormGroup,
  ControlLabel,
  Radio
} from "react-bootstrap";

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
      },
      search: {
        gender: "male"
      }
    };
  }

  componentDidMount() {
    this.fetchRandomUser({ gender: this.state.search.gender });
  }

  fetchRandomUser(searchOptions) {
    fetch("https://randomuser.me/api/?results=1&gender=" + searchOptions.gender)
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

  handleGenderChange = changeEvent => {
    this.setState({ search: { gender: changeEvent.target.value } });
  };

  getPanelFooter = () => {
    return (
      <form style={{ fontSize: "0.6em" }}>
        <Button
          id="btnNewRandomUser"
          bsStyle="success"
          onClick={() => {
            this.fetchRandomUser({ gender: this.state.search.gender });
          }}
        >
          New random user
        </Button>
        <br />
        <br />
        <FormGroup controlId="">
          <ControlLabel>Gender:</ControlLabel>{" "}
          <Radio
            id="rdiMale"
            name="gender"
            value="male"
            inline
            onChange={this.handleGenderChange}
            checked={this.state.search.gender === "male"}
          >
            Male
          </Radio>
          <Radio
            id="rdiFemale"
            name="gender"
            value="female"
            inline
            onChange={this.handleGenderChange}
            checked={this.state.search.gender === "female"}
          >
            Female
          </Radio>
        </FormGroup>
      </form>
    );
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
