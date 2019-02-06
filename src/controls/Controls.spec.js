import React from "react";
import Controls from "../controls/Controls";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

describe("huh", () => {
  test("defaults to unlocked and open", () => {
    const component =  render(<Controls />);
    const button = component.getByText(/close gate/i);
    fireEvent.click(button);
    expect(button).toHaveTextContent(/open gate/i);
  });

  test("green text", () => {
    const component =  render(<Controls />);
    const button = component.getByText(/close gate/i);
    fireEvent.click(button);
    expect(button).toHaveTextContent(/open gate/i);
  });

});

