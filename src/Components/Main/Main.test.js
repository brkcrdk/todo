import React from "react";
import { render } from "@testing-library/react";
import Main from "./Main";

const setup = () => {
  const utils = render(<Main />);
  const main = utils.getByTestId(/main-container/gi);
  return {
    main,
    ...utils
  };
};

test("render Main components header", () => {
  const { getByText } = setup();
  const headerElement = getByText(/Main page goes here/i);
  expect(headerElement).toBeInTheDocument();
});

test("render item component", () => {
  const { getByTestId } = setup();
  const itemElement = getByTestId(/item-container/i);
  expect(itemElement).toBeInTheDocument();
});

test("render list component", () => {
  const { getByTestId } = setup();
  const itemElement = getByTestId(/list-container/i);
  expect(itemElement).toBeInTheDocument();
});
