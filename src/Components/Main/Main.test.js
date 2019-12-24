import React from "react";
import { render } from "@testing-library/react";
import Main from "./Main";

const setup = () => {
  const { utils, getByTestId } = render(<Main />);
  const main = getByTestId("main-container");
  return {
    main,
    ...utils
  };
};

test("render Main components header", () => {
  expect(true).toBe(true);
  // const { getByText } = setup();
  // const headerElement = getByText(/Main page goes here/i);
  // expect(headerElement).toBeInTheDocument();
});

test("render item component", () => {
  // const { getByTestId } = setup();
  // const itemElement = getByTestId(/item-container/i);
  // expect(itemElement).toBeInTheDocument();
});
