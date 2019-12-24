import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Item from "./Item";
const setup = () => {
  const utils = render(<Item />);
  const form = utils.getByTestId("item-container");
  const input = utils.getByLabelText("todo-input");
  const button = utils.getByTestId("add-button");
  return {
    input,
    form,
    button,
    ...utils
  };
};

test("render item container", () => {
  const { form } = setup();
  expect(form).toBeInTheDocument();
});

test("render input item", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "23" } });
  expect(input.value).toBe("23");
});

test("render add button", () => {
  const { button } = setup();
  expect(button).toBeInTheDocument();
});
