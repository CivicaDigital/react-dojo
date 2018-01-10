# ReactJs dojo

This dojo contains a selection of ReactJs concepts that will help you to start your first React Web App. We will not be diving to deep in to the ReactJs library or the eco system of supporting libraries; that will be left to you.

You can find the official documentation at: [https://reactjs.org/docs/hello-world.html](https://reactjs.org/docs/hello-world.html)

## Pre-requisites

* Install [node](https://nodejs.org/en/download/) v6 or newer & [yarn](https://yarnpkg.com/lang/en/)
* Install git either [git-for-windows](https://git-for-windows.github.io/) or [git-for-mac](https://sourceforge.net/projects/git-osx-installer/files/). If you need help take a look at [https://www.atlassian.com/git/tutorials/install-git](https://www.atlassian.com/git/tutorials/install-git)
* Install create-react-app, by running `yarn global add create-react-app` in a command or bash window
* Install [vscode](https://code.visualstudio.com/)

### Optional

* You may consider installing the [Prettier](https://prettier.io/) extension for vscode to help with code formatting.
* You may also consider installing [Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets) once you are comfortable with the basics.

## Project set-up

Follow these steps to create a blank project and run it locally. Keep it running for the rest of this dojo:

* Open a new git bash window (or cmd if you prefer)
* Change directory to where you'd like to create your new project folder (i.e. `cd /c/development/`), and run the following commands:
  * `create-react-app react-dojo-frontend`
  * `cd react-dojo-frontend`
  * `code .`
  * Open a terminal window in vscode using `ctrl + '` and type:
    * `yarn start`

After a moment or two your default browser should open and you should see your new React site. If not open it and enter URL shown in your terminal window. (i.e. <http://localhost:3000>).

You should also have your new project open in vscode, ready for editing. The page will reload if you make edits and you will also see any [lint](http://www.stuartellis.name/posts/code-linting/#so-umm-what-is-a-linter) errors in the terminal window

### Project folder structure

```bash
README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build these files must exist with exact filenames:

* `public/index.html` - This is the main page template and provides the element to which React adds everything (`<div id="root"><div>`)
* `src/index.js` - This is the Javascript entry point and where React is told to use the `root` div mentioned above

You are free to delete or rename any of the other files.

You can create subdirectories inside `src` to help organise the components that build up the application. We will do this as we progress through the Dojo.

### Styling

For our dojo frontend we are going to use [Bootstrap 3](https://getbootstrap.com/docs/3.3/) as our CSS framework. This is going to be provided by the [React-Bootstrap](https://react-bootstrap.github.io/) library as it provides some easy to use components which follow the React way of working nicely. You'll need to add this package to the app:

* Open another terminal in vscode using `ctrl + shift + '`. _We'll use two terminals so the other can continue to serve our app while we work_.
* Run `yarn add react-bootstrap@0.31.5 bootstrap@3`
* Import Bootstrap CSS and optionally Bootstrap theme CSS in the beginning of `src/index.js` - you can open the file by using `ctrl + p` and typing `index.js`:
  * `import 'bootstrap/dist/css/bootstrap.css';`
  * `import 'bootstrap/dist/css/bootstrap-theme.css';`

_(Note: After adding new packages you may need to restart the development server running in the first terminal with `ctrl + c` and running `yarn start` again)_

Now let's see if it's working by editing `App.js`:

* Add `import { Navbar, Jumbotron } from "react-bootstrap";` to the list of imports
* Replace `header` with `Navbar` and remove the `className` attribute (remember the end tag)
* Replace `p` with `Jumbotron` and remove the `className` attribute
* Move the `h1` from between `Navbar` to between `Jumbotron`

If you've left the site running, you should see all of your changes show up in real time as you save.

## Components

Having everything in the `App.js` is nice at the moment and makes it easy to see all the components that make up the page. As the application grows however this file will become much larger and harder to maintain. The React way of dealing with this (and a sensible concept to follow) is to break pages and apps up into small components that do one thing and do it well.

So let's pull our navigation out into its own component.

* Create a new folder under `src` called `components`
* Create a new file under `components` called `Navigation.js` (Files with React components in should use PascalCase)
* Add the following scaffolding to `Navigation.js`

```javascript
import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Navigation;
```

* Move the import for `logo` from `App.js` to `Navigation.js` and change the path to `'../logo.svg'`
* Copy the import for `Navbar` from `App.js` to `Navigation.js`
* Copy the `Navbar` tag from `App.js` and paste it in between the `<div>` tags in `Navigation.js`
* Add the following import to `App.js`:

  ``` javascript
  import Navigation from "./components/Navigation";
  ```

* Remove the `Navbar` tag in `App.js` and replace it with:

  ```html
  <Navigation />
  ```

When your browser refreshes you should see... No change at all. If this is the case you have done everything right and have just created your first reusable React component.

_If you see an error in the browser, check the terminal window running the development server for errors. The message(s) should help you pinpoint the issue easily._

### JSX

The HTML-like syntax in the render of the `Navigation` component above is not HTML, it's JSX. JSX is just syntactic sugar for how React composes the nested components. It's important to remember that **JSX is NOT HTML**. If you look closely you can see the differences as you move through this Dojo (for example `className` in JSX vs `class` in regular HTML).

The other important thing to note is that JSX can only have one root element. As in the `Naviagtion` component above, there is a single `<div>` element inside which you copied the navigation element from `App.js`. For example:

Bad JSX

``` Javascript
  return (
    <div>Hello</div>
    <div>World</div>
  );
```

Good JSX

``` Javascript
return (
    <div>
      <div>Hello</div>
      <div>World</div>
    </div>
  );
```

More information about JSX can be found in the [official docs](https://reactjs.org/docs/jsx-in-depth.html).

## Routing

Routing allows for navigation between components (page components) in our React app. So we will start by adding the following two components:

* Home
* About

For routing to work we need to add two additional packages to our project:

* Open the terminal used above to add Bootstrap (or open a new one using `ctrl + shift + '` ).
* Run `yarn add react-router-dom react-router-bootstrap`

_(Note: After adding new packages you may need to restart the development server running in the first terminal with `ctrl + c` and running `yarn start` again)_

Now we need to add two new components, one for home and one for about:

* Under the `components` folder add a file called `Home.js`
* Add the following scaffolding to `Home.js`

``` javascript
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Home;
```

* Add another file under components called `About.js` with the above scaffolding with a class name of `About` and export of `About` _(You should start to see a pattern in the basic scaffolding for a component by now)_
* Copy the `Jumbotron` import from `App.js` to `Home.js`
* Copy the `Jumbotron` element from `App.js` in between the `div` element in `Home.js`
* Add some text (maybe "This is the about page") between the `div` element in `About.js`

With the components in place we need to make the changes to our `App.js` file to tell React which component to show and when.

In `App.js`:

* Add the following imports

``` javascript
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
```

* Wrap the `div` element with a `BrowserRouter` element (Remember the ending `BrowserRouter` element)
* Completely replace the `Jumbotron` element with the following

```html
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </Switch>
```

* Remove the now unused `Jumbotron` import

The final step is to add some links to our Navigation component to allow us to navigate between the home and about components.

In `Navigation.js`:

* Add `Nav` and `NavItem` to the `react-bootstrap` import
* Add a new import for `LinkContainer` from `react-router-bootstrap`
* Remove the `img` element in the `NavBar` element
* In the `NavBar` element add the following

``` html
  <Nav>
    <LinkContainer exact to="/">
      <NavItem>Home</NavItem>
    </LinkContainer>
    <LinkContainer to="/about">
      <NavItem>About</NavItem>
    </LinkContainer>
  </Nav>
```

* Remove the now unused logo import in `Navigation.js`

You should now have two links in your nav bar that when clicked change the component displayed. Click away and enjoy the wonder of your first React app...

## API integration

Our basic app is nice however it feels very bare. Let's add some content to it from an API. For this Dojo we are going to use the public Random user API from <https://randomuser.me/>

* Create a new component called `UserDetails.js` with the basic scaffolding as we did for `Home` and `About`
* Add a `constructor` function, just above the `render` function as follows:

```javascript
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
    }
  }
```

* Add a `componentDidMount` function (_between the `constructor` and `render` functions_) as follows:

``` javascript
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
```

_You can find out about componentDidMount and other life cycle events in the [React docs](https://reactjs.org/docs/react-component.html)_

_**If you are not furmiliar with the `Promise` syntax above there is a nice [blog post](https://scotch.io/tutorials/javascript-promises-for-dummies#new-kid-on-the-block-observables) on scotch.io that might help.**_

* Replace the `render` function with the following, remembering to add the imports for the newly used Bootstrap components

``` javascript
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
```

Let's add the missing supporting functions between `componentDidMount` and `render` functions.

``` javascript
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
```

Now it's time to tell the app about our new component:

* In `Home.js` add an import for the `UserDetails` component
* Under the `Jumbotron` element add

```html
  <UserDetails />
```

Now if the everything went well when the app reloads in the browser you will see a new element that displays a random user's name and profile picture.
Moving between the 'About' and 'Home' components will trigger a fetch and render of a new random user. Try it!!

## State and Props

### State

>In one sense, "state" means the current visual representation of the app on screen… In the React sense, "state" is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this.state. - Dave Ceddia

In the `UserDetails` component above we introduced state by setting the initial values in the constructor function with the following:

```javascript
  this.state = {
      user: {
        name: {
          title: "",
          first: "",
          last: ""
        },
        thumbnail: ""
      }
    }
```

A components state can only be set like this in its constructor function, at any other point if it needs to change the `this.setState()` function is used.
The main reason for this is that React is trying to inforce immutability in a non immutable language - you can read more about JavaScript and immutability [here](https://www.sitepoint.com/immutability-javascript/). One upside to this is that all changes to state are done by one function which makes it easy to find and debug when a component isn't rendering the right details.

### Props

Props in React are a way for a parent component to pass information/properties down to child components. These properties can be static state values, settings and also functions that the child component can call. They look like normal HTML attributes.

An abstract example of this in the context of our app could be, when the `UserDetails` component fetches a new random user the `Home` component changes the message in the `Jumbotron`. This could done as follows

* A property called "currentRandomUsersFullname" is added to the state of the `Home` component
* A function called `changeRandomUsersFullname` that updates the "currentRandomUsersFullname" state value is added to the `Home` component
* The `Jumbotron` content is updated to display the value of `this.state.currentRandomUsersFullname`
* The `changeRandomeUsersFullname` function is passed to the `UserDetails` component as a property called `onDetailsChange`
* Every time a random user is fetched in the `UserDetails` component a call is made to `this.props.onDetailsChange` passing it the full name of the user

**Bonus points** - Give the above a go and see if you can get it to work.

## User interactions

Let's add some functionality that users of our app can interact with.

At the moment the only way to get a new random user is to reload the page or navigate between the `Home` and `About` components. It would be nicer if the user could click a button instead.

In `UserDetails.js`:

* Refactor the contents of the `componentDidMount` function out into a function called `fetchRandomUser`
* Add a call to `this.fetchRandomUser` to `componentDidMount` (_At this point if you test the app you should not see any difference_)
* Add `Button` to the import form `react-bootstrap`
* Replace the contents of `getPanelFooter` with:

``` javascript
    return (
      <Button id="btnNewRandomUser" bsStyle="success" onClick={() => {this.fetchRandomUser()}}>
        New random user
      </Button>
    );
```

At this point if you click the button you will see that the users name and profile image changes.

If you open the developer tools in the browser (`F12`) and look at the network tab, you'll notice that there are only two calls made when the button is clicked. One to the API for the user details and another for the user's profile image. This is because everything else is happening in the browser (client-side) and the page is not being reloaded.

Let's add the ability to only show male or female names and profile pictures.

In `UserDetails.js`:

* Add a `search` object with a `gender` property set to `"male"` to the initial state
* Change the call to `fetchRandomUser` in `componentDidMount` to pass an object with a `gender` property set to `this.state.search.gender`
* Change the function signature for `fetchRandomUser` to accept a parameter and call it `searchOptions`
* Change the url passed to the `fetch` function to `"https://randomuser.me/api/?results=1&gender=" + searchOptions.gender`
* Add a the following function above the `getPanelFooter` function:

``` javascript
  handleGenderChange = changeEvent => {
    this.setState({ search: { gender: changeEvent.target.value } });
  };

```

* Change the `getPanelFooter` function to the following, remembering to add the imports for the newly used Bootstrap components:

``` javascript
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
```

Now when the app reloads there will be two radio buttons below the _New random user_ button. Changing which is selected and clicking _New random user_ will result in only names and profile pictures for that gender being shown.

### Bonus exercises

* Change the default gender selection when the app loads from _male_ to _female_
* Add the ability to only display English and French names ([Have a look at the docs](https://randomuser.me/documentation#nationalities))
* Add a loading spinner using state, Promises, props and a component

## Bonus sections

### Component Types

As you have seen components are the core building blocks of React apps. We have not only created our own components, in `Navigation` and `UserDetails` we have used others components like `LinkContainer` and `Button`. React is really just a library for creating components at its core.

Each component needs to return or render some JSX (the HTML-like looking code we have been creating above) for React to render to the real DOM. Without this there would be nothing shown on the screen.

When creating components there are two different ways:

* **Functional** (_presentational_, _stateless_, _dumb_)

``` Javascript
  const Username = (user) => { return <div>{user.identity}</div> }
``` 

* **Class-Based** (_containers_, _smart_, _stateful_)

```Javascript
  class UserDetails extends Component {
    render () {
      return <div>Some user details...</div>
    }
  }
```

It's considered best practice to use `Functional` components as often as possible as they are lightweight, fast and composable. We have used `Class-Based` components so far however a number of them could we switched to be `Functional` components.
Can you spot which ones? (_Hint_: They don't have any state)

Try converting one of them, if not all.

### Testing

While navigating the project you may have noticed the `App.test.js` file that was created by _create-react-app_. The convention for React apps is to name the test files after the components they test with _test_ after the name and before `.js`

You can run them using:

``` Bash
  yarn test
```

Running them now results in a failure. This is because when the `UserDetails` component mounts it makes a call to the _randomuser.me_ API (in `componentDidMount`).
We need to make some changes to allow our tests to run without calling out to the real API. This is done using a concept called _mocking_, we will not dig in to this here as there are plenty of good explanations online.

Lets start making the required changes.

* Add a package called `jest-fetch-mock` using `yarn`. This package is for use while developing for make sure you use the `--dev` option when adding.

In `App.test.js`

* Add the following code just under the import lines to replace the global `fetch` function with the one from the `jest-fetch-mock` library.

```Javascript
global.fetch = require("jest-fetch-mock");
```

* Replace the existing call to `it("renders without crashing")` function with:

```Javascript
describe("App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
```

* Add the following mock response to as the first line in the `renders without crashing` test

```Javascript
  fetch.mockResponse(
    JSON.stringify({
      results: [
        {
          gender: "male",
          name: { title: "monsieur", first: "victor", last: "riviere" },
          location: {
            street: "2113 place des 44 enfants d'izieu",
            city: "savigny",
            state: "ticino",
            postcode: 5614
          },
          email: "victor.riviere@example.com",
          login: {
            username: "organiccat975",
            password: "base",
            salt: "q0IJerIY",
            md5: "6183c15acc40044097f248acb1d3da9f",
            sha1: "ce0bc4f0c22a390ad1b5e4c0ac6214745967105c",
            sha256:
              "6616ffb0fa7bf5dc13bb9aedc16b36d5f84bf49818e784ea58f342835b7876b2"
          },
          dob: "1955-06-08 23:49:32",
          registered: "2002-11-14 04:24:53",
          phone: "(704)-124-3808",
          cell: "(966)-638-1407",
          id: { name: "AVS", value: "756.RFRI.GUKM.93" },
          picture: {
            large: "https://randomuser.me/api/portraits/men/59.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/59.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/59.jpg"
          },
          nat: "CH"
        }
      ],
      info: { seed: "fff763e9a0d04a5f", results: 1, page: 1, version: "1.1" }
    })
  );
```

Now run the tests again and if everything is good they will pass. Yay! Go Us!!! :)

As you can see from the existing test, our test suites begin with a call to a global function `describe` which has two parameters: a string and a function. The string is a name or title for a suite of tests ("App component"). The function is a block of code that implements the suite.

Tests are defined by calling the global function `it`, which, like `describe` takes a string and a function. The string is the title of the test and the function is the test. A test contains one or more expectations that prove the state of the code under test. An expectation is just an assertion that is either true or false (In this case the fact that the app didn't crash results in a true assertion).

Since `describe` and `it` are functions, they can contain any executable code necessary to implement the test. JavaScript scoping rules apply, so variables declared in a `describe` are available to any it block inside.

So now that we have a passing test that proves our app doesn't crash on start up, it's probably a good time to add some more. First though let's tidy up our code a little to make it easier to add more tests.

* Add a new file called `testConstants.js` under the `src` folder.
* In `testConstants.js` add:

```Javascript
module.exports = {
  mocks: {
    responseFromRandomUserApi: {
      success: {
        results: [
          {
            gender: "male",
            name: { title: "monsieur", first: "victor", last: "riviere" },
            location: {
              street: "2113 place des 44 enfants d'izieu",
              city: "savigny",
              state: "ticino",
              postcode: 5614
            },
            email: "victor.riviere@example.com",
            login: {
              username: "organiccat975",
              password: "base",
              salt: "q0IJerIY",
              md5: "6183c15acc40044097f248acb1d3da9f",
              sha1: "ce0bc4f0c22a390ad1b5e4c0ac6214745967105c",
              sha256:
                "6616ffb0fa7bf5dc13bb9aedc16b36d5f84bf49818e784ea58f342835b7876b2"
            },
            dob: "1955-06-08 23:49:32",
            registered: "2002-11-14 04:24:53",
            phone: "(704)-124-3808",
            cell: "(966)-638-1407",
            id: { name: "AVS", value: "756.RFRI.GUKM.93" },
            picture: {
              large: "https://randomuser.me/api/portraits/men/59.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/59.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/59.jpg"
            },
            nat: "CH"
          }
        ],
        info: { seed: "fff763e9a0d04a5f", results: 1, page: 1, version: "1.1" }
      }
    }
  },
  expects: {
    requestsToRandomUserApi: {
      maleUrl: "https://randomuser.me/api/?results=1&gender=male",
      femaleUrl: "https://randomuser.me/api/?results=1&gender=female"
    }
  }
};
```

* In `App.test.js`
  * Import `testConstants.js`
  * Remove the call to `fetch.mockResponse` - Make sure to remove all of it's arguments as well
  * Between the call to `describe` and `it` add the following:

``` Javascript
  beforeEach(() => {
    fetch.resetMocks();
    genericMockedFetch = fetch.mockResponse(
      JSON.stringify(testConstants.mocks.responseFromRandomUserApi.success)
    );
  });
```

These changes move the mock response from `randomuser.me` in to a file and an object that can be reused as we progress. Should the expected response from the API change at any point we have one place to make the change for all tests.

Now let's add some tests that cover the `UserDetails` component.

* Add the following new packages to help us out:
  * enzyme ^3.2.0
  * enzyme-adapter-react-16 ^1.1.0
  * jest-enzyme ^4.0.1
* Add a new file in the src folder called `setupTests.js` and add the following to configure the enzyme package to work with React 16:

```Javascript
import "jest-enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
```

* Add a new file in the components folder that will contain the `UserDetails` tests (remember the naming convention)
* Add the following to the new file:

```Javascript
import React from "react";
import { mount } from "enzyme";
import testConstants from "../testConstants";
import UserDetails from "./UserDetails";

global.fetch = require("jest-fetch-mock");
let genericMockedFetch;
let componentUnderTest;

describe("UserDetails component", () => {
  beforeEach(() => {
    fetch.resetMocks();
    genericMockedFetch = fetch.mockResponse(
      JSON.stringify(testConstants.mocks.responseFromRandomUserApi.success)
    );
    componentUnderTest = mount(<UserDetails />);
  });

  describe("Initial state", () => {
    it("Should make initial call to randomuser.me with gender set to male", () => {
      expect(genericMockedFetch).toHaveBeenCalledTimes(1);
      expect(genericMockedFetch).toHaveBeenLastCalledWith(
        testConstants.expects.requestsToRandomUserApi.maleUrl
      );
    });
  });
});

```

There are a couple of new concepts introduced above which are:

* `beforeEach` - The `beforeEach` function is used to specifiy a block of code that is run before each `it` function within the `describe` block. This is useful for setting up some state or resetting state like we do with `fetch.resetMocks()`
* `expect` - The `expect` function is used to assert that the code executed as required. Should any call to `expect` result in an error or false result then the test will fall.

There is one more concept that we need to cover and that's testing the Async calls.

In the `UserDetails` test file add the following support functions just after the `componentUserTest` declaration:

```Javascript

// https://github.com/facebook/jest/issues/2157#issuecomment-279171856
function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

function getFirstSuccessResultFromMockApiResponse() {
  return testConstants.mocks.responseFromRandomUserApi.success.results[0];
}

```

With these in place let's add a new `describe` function and two test to the "Initial state" block.

```Javascript
    describe("State.User", () => {
      it("Should have the name object set", () => {
        return flushPromises().then(() => {
          expect(componentUnderTest.state().user.name.title).toBe(
            getFirstSuccessResultFromMockApiResponse().name.title
          );
          expect(componentUnderTest.state().user.name.first).toBe(
            getFirstSuccessResultFromMockApiResponse().name.first
          );
          expect(componentUnderTest.state().user.name.last).toBe(
            getFirstSuccessResultFromMockApiResponse().name.last
          );
        });
      });
      it("Should have the thumbnail set", () => {
        return flushPromises().then(() => {
          expect(componentUnderTest.state().user.thumbnail).toBe(
            getFirstSuccessResultFromMockApiResponse().picture.large
          );
        });
      });
    });
```

Because our `user` object is populated upon the return of a result from the `randomuser.me` API we need to make sure Jest waits for the promise chain to complete with the use of `flushPromises`. Then we can assert the state object has the values we expect.

Let's add a test to make sure that when the gender is changed and the "New random user" button is pressed the correct request is made to the the API. As this test is not to do with the initial state of the component add it outside the "Initial state" `describe` function but inside the "UserDetails component" `describe` function:

```Javascript
  it("Should make call to randomuser.me with gender set to female", () => {
    componentUnderTest.find("input#rdiFemale").simulate("change");
    componentUnderTest.find("button#btnNewRandomUser").simulate("click");
    return flushPromises().then(() => {
      expect(genericMockedFetch).toHaveBeenLastCalledWith(
        testConstants.expects.requestsToRandomUserApi.femaleUrl
      );
    });
  });
```

Again this test introduces two new concepts in the form of `.find` and `.simulate` from the `enzyme` package.
The `find` function finds every node in the React DOM that matches the passed selector, in this case "input#rdiFemale". The selector used here is a plain CSS selector. We then call the `simulate` function passing it the name of the event we want to simulate, in this case "change". The result React will update the state of the component just as if we did the same in a browser. We then find the `btnNewRandomUser` button and click it. This initiates a call to our mock fetch object which we can then check to make sure the correct url was requested using `expect`.

Now it's over to you!

* Add a test to make sure that when gender is set to male the correct url is requested
* Add a test to check the users name is set as the heading in the panel

## Resources

* [Visual Studio Code](https://code.visualstudio.com/)
* [React documentation](https://reactjs.org/docs/hello-world.html)
* [Yarn documentation](https://yarnpkg.com/en/docs)
* [Enzyme documentation](http://airbnb.io/enzyme/)
* [React-Bootstrap documentation](https://react-bootstrap.github.io/)
* [Jest-fetch-mock documentation](https://github.com/jefflau/jest-fetch-mock)
* [Random User documentation](https://randomuser.me/documentation)
* [Information about immutability](https://www.sitepoint.com/immutability-javascript/)
* [create-react-app documentation](https://github.com/facebookincubator/create-react-app)
* [JSX documentation](https://reactjs.org/docs/jsx-in-depth.html)
* [React component life cycle documentation](https://reactjs.org/docs/react-component.html)