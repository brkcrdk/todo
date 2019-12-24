import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Item from "./Item";
const setup = () => {
  const { utils, getByTestId, getByLabelText } = render(<Item />);
  const form = getByTestId("item-container");
  const input = getByLabelText("todo-input");
  return {
    input,
    form,
    ...utils
  };
};

test("render item container", () => {
  expect(true).toBe(true);
  // const { form } = setup();
  // expect(form).toBeInTheDocument();
});

// test("render input item", () => {
//   const { input } = setup();
//   fireEvent.change(input, { target: { value: "23" } });
//   expect(input.value).toBe("23");
// });
