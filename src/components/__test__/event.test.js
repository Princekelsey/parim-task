import React from "react";
import ReactDOM from "react-dom";
import Event from "../Event";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../redux/store";

afterEach(cleanup);
const mockEvent = [{ type: "test", name: "testName" }];

it("Event component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Event date="2020-06-09" event={mockEvent} />
    </Provider>,
    div
  );
});

it("renders calender correctly", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Event date="2020-06-09" event={mockEvent} />
    </Provider>
  );
  expect(getByTestId("event"));
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Event date="2020-06-09" event={mockEvent} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
