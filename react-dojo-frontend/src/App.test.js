import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import testConstants from "./testConstants";

global.fetch = require("jest-fetch-mock");

describe("App component", () => {
  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse(
      JSON.stringify(testConstants.mocks.responseFromRandomUserApi.success)
    );
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
