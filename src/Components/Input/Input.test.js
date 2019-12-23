import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Input from "./Input";

const setup = () => {
  const utils = render(<Input />);
  const input = utils.getByLabelText("todo-input");
  return {
    input,
    ...utils
  };
};

test("It should render input", () => {
  const { input } = setup();
  expect(input).toBeInTheDocument();
});

test("it should render label", () => {
  const { input, getByText } = setup();
  const labelElement = getByText(/Add todo:/i);
  expect(labelElement).toBeInTheDocument();
});

test("changes value when entered", () => {
  const { input } = setup();
  fireEvent.change(input, {
    target: { value: "Input test" }
  });
  expect(input.value).toBe("Input test");
  fireEvent.change(input, {
    target: { value: "" }
  });
  expect(input.value).toBe("");
});
