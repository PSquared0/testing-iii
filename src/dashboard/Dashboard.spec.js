import React from "react";
import Controls from "../controls/Controls";
import Display from "../display/Display";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

describe("The Display component", () => {
  test("renders without crashing", () => {
    render(<Display />);
  });
});

describe("The Control component", () => {
  test("renders without crashing", () => {
    render(<Controls />);
  });

  describe("Gate behaviors", () => {
    test("defaults to unlocked and open", () => {
      const component =  render(<Controls />);
      expect(component.state.locked).toBe(false);
    });
  });

});
