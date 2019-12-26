import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Main from "./Main";

const setup = () => {
  const utils = render(<Main />);
  return {
    ...utils
  };
};
afterEach(cleanup);
test("render Main components header", () => {
  const { getByText } = setup();
  const headerElement = getByText(/Main page goes here/i);
  expect(headerElement).toBeInTheDocument();
});

test("should render item component", () => {
  const { getByTestId } = setup();
  const item = getByTestId(/item-container/i);
  expect(item).toBeInTheDocument();
});

test("should render list component", () => {
  const { getByTestId } = setup();
  const list = getByTestId(/list-container/i);
  expect(list).toBeInTheDocument();
});

test("should add list item when add button clicked", () => {
  const { getByTestId, getByText } = setup();
  const button = getByText("Add Todo");
  const input = getByTestId(/todo-input/i);
  const list = getByTestId(/list-container/i);
  expect(input.value).toBe("");
  fireEvent.change(input, {
    target: {
      value: "Learn react"
    }
  });
  expect(input.value).not.toBe("");
  fireEvent.click(button);
  expect(list.children.length).toBe(3);
  expect(input.value).toBe("");
});
