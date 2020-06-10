import React from "react";
import ReactDOM from "react-dom";
import Calender from "../Calender";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../redux/store";

afterEach(cleanup);

it("Calender component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Calender />
    </Provider>,
    div
  );
});

it("renders calender correctly", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Calender />
    </Provider>
  );
  expect(getByTestId("calender"));
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Calender />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
