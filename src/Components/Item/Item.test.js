import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Item from "./Item";
import List from "../List/List";

afterEach(cleanup);

const setup = () => {
  const utils = render(<Item />);
  const input = utils.getByTestId(/todo-input/i);
  const button = utils.getByText("Add Todo");
  return { input, button, ...utils };
};

test("should render input", () => {
  const { input } = setup();
  expect(input).toBeInTheDocument();
});

test("input changes value when something typed", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "23" } });
  expect(input.value).toBe("23");
});

test("should render Add button", () => {
  const { button } = setup();
  expect(button).toBeInTheDocument();
});

test("should add value to todo when clicked", () => {
  const { getByTestId } = render(<List />);
  const { button } = setup();
  const list = getByTestId(/list-container/i);
  C;
});
