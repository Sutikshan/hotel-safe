import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import InputPanel from "./InputPanel";
import { BUTTON_SET } from "../HotelSafeConstants";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<InputPanel onButtonClick={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders all buttons from Button_set", () => {
  const inputPanel = shallow(<InputPanel onButtonClick={() => {}} />);

  expect(inputPanel.find("button").length).toEqual(BUTTON_SET.length);
});

it("ensure button clicks trigger onButtonClick", () => {
  let actualInput = -1;

  const buttonClick = input => {
    actualInput = input;
  };

  const inputPanel = shallow(<InputPanel onButtonClick={buttonClick} />);

  inputPanel.find("button[children='1']").simulate("click");
  expect(actualInput).toEqual(1);
});
