import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Item from "./Item";

const setup = () => {
  const utils = render(<Item />);
  const input = utils.getByTestId(/todo-input/i);
  return { input, ...utils };
};

test("should render input", () => {
  const { input } = setup();
  expect(input).toBeInTheDocument();
});

test("input changes value when something typed", () => {
  const { input } = setup();
  fireEvent.change("23");
  expect(input.value).toBe("23");
});

test("should render Add button", () => {
  const { getByTestId } = setup();
  const button = getByTestId(/todo-button/i);
  expect(button).toBeInTheDocument();
});
