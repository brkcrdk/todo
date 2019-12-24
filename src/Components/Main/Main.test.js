import React from "react";
import { render } from "@testing-library/react";
import Main from "./Main";

const setup = () => {
  const { utils, getByTestId } = render(<Main />);
  const main = getByTestId(/main-container/i);
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
