import React from "react";
import { mount } from "enzyme";
import testConstants from "../testConstants";
import UserDetails from "./UserDetails";

global.fetch = require("jest-fetch-mock");
let genericMockedFetch;
let componentUnderTest;

// https://github.com/facebook/jest/issues/2157#issuecomment-279171856
function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

function getFirstSuccessResultFromMockApiResponse() {
  return testConstants.mocks.responseFromRandomUserApi.success.results[0];
}

describe("UserDetails component", () => {
  beforeEach(() => {
    fetch.resetMocks();
    genericMockedFetch = fetch.mockResponse(
      JSON.stringify(testConstants.mocks.responseFromRandomUserApi.success)
    );
    componentUnderTest = mount(<UserDetails />);
  });

  describe("Initial state", () => {
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
    it("Should make initial call to randomuser.me with gender set to male", () => {
      expect(genericMockedFetch).toHaveBeenCalledTimes(1);
      expect(genericMockedFetch).toHaveBeenLastCalledWith(
        testConstants.expects.requestsToRandomUserApi.maleUrl
      );
    });
  });
  it("Should make call to randomuser.me with gender set to female", () => {
    componentUnderTest.find("input#rdiFemale").simulate("change");
    componentUnderTest.find("button#btnNewRandomUser").simulate("click");
    return flushPromises().then(() => {
      expect(genericMockedFetch).toHaveBeenLastCalledWith(
        testConstants.expects.requestsToRandomUserApi.femaleUrl
      );
    });
  });
});
