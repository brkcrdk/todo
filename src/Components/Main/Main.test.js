import React from "react";
import { render } from "@testing-library/react";
import Main from "./Main";

const setup = () => {
  const utils = render(<Main />);
  const main = utils.getByTestId(/main-container/i);
  const item = utils.getByTestId(/item-container/i);
  const list = utils.getByTestId(/list-container/i);
  return {
    item,
    list,
    main,
    ...utils
  };
};

test("render Main components header", () => {
  const { getByText } = setup();
  const headerElement = getByText(/Main page goes here/i);
  expect(headerElement).toBeInTheDocument();
});

test("should render item component", () => {});

test("should render list component", () => {});
