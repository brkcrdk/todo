import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Item from "./Item";
const setup = () => {
  const { utils } = render(<Item />);
  const form = utils.getByTestId(/item-container/i);
  const input = utils.getByLabelText(/todo-input/i);
  return {
    input,
    form,
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
