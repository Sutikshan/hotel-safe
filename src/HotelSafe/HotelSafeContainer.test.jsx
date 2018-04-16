import React from "react";
import { mount } from "enzyme";
import ReactDOM from "react-dom";
import HotelSafeContainer from "./HotelSafeContainer";
import DisplayPanel from "./DisplayPanel";
import InputPanel from "./InputPanel";
import { INDICATOR_STATUS } from "./HotelSafeConstants";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HotelSafeContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders parent div with otel-safe-container class and child divs", () => {
  const hotelSafeContainer = mount(<HotelSafeContainer />);

  expect(hotelSafeContainer.find("div.hotel-safe-container").length).toEqual(1);
  expect(hotelSafeContainer.find(DisplayPanel).length).toEqual(1);
  expect(hotelSafeContainer.find(InputPanel).length).toEqual(1);
});

const simulateClick = (inputPanel, value) =>
  inputPanel
    .find(".input-button")
    .filterWhere(item => item.text() === value.toString())
    .simulate("click");

it("renders div with entered pin", () => {
  const hotelSafeContainer = mount(<HotelSafeContainer />);
  const inputPanel = hotelSafeContainer.find(InputPanel);
  const displayPanel = hotelSafeContainer.find(DisplayPanel);

  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);

  expect(displayPanel.find("div.display-text").text()).toEqual("1111");
});

it("renders div with entered pin and reacts to delete", () => {
  const hotelSafeContainer = mount(<HotelSafeContainer />);
  const inputPanel = hotelSafeContainer.find(InputPanel);

  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);

  simulateClick(inputPanel, "CLR");

  const displayPanel = hotelSafeContainer.find(DisplayPanel);

  expect(displayPanel.find("div.display-text").text()).toEqual("");
});

it("on wrong pin submission sets the error to indicator status error", () => {
  const hotelSafeContainer = mount(<HotelSafeContainer />);
  const inputPanel = hotelSafeContainer.find(InputPanel);

  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, "↵");

  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 3);
  simulateClick(inputPanel, "↵");

  const displayPanel = hotelSafeContainer.find(DisplayPanel);
  expect(
    displayPanel.find("div.indicator").get(0).props.style.backgroundColor
  ).toEqual(INDICATOR_STATUS.error);
});

it("on correct pin submission sets the error to indicator status unlocked", () => {
  const hotelSafeContainer = mount(<HotelSafeContainer />);
  const inputPanel = hotelSafeContainer.find(InputPanel);

  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, "↵");

  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, 1);
  simulateClick(inputPanel, "↵");

  const displayPanel = hotelSafeContainer.find(DisplayPanel);
  expect(
    displayPanel.find("div.indicator").get(0).props.style.backgroundColor
  ).toEqual(INDICATOR_STATUS.unlock);
});
