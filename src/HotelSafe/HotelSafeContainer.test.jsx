import React from "react";
import { shallow } from "enzyme";
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
  const hotelSafeContainer = shallow(<HotelSafeContainer />);

  expect(hotelSafeContainer.find("div.hotel-safe-container").length).toEqual(1);
  expect(hotelSafeContainer.find(DisplayPanel).length).toEqual(1);
  expect(hotelSafeContainer.find(InputPanel).length).toEqual(1);
});

it("renders div with entered pin", () => {
  const hotelSafeContainer = shallow(<HotelSafeContainer />);

  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  const displayPanel = hotelSafeContainer.find(DisplayPanel).dive();

  expect(displayPanel.find("div.display-text").text()).toEqual("1111");
});

it("renders div with entered pin and reacts to backspace", () => {
  const hotelSafeContainer = shallow(<HotelSafeContainer />);

  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });

  hotelSafeContainer.simulate("keyup", { key: "Backspace" });
  const displayPanel = hotelSafeContainer.find(DisplayPanel).dive();

  expect(displayPanel.find("div.display-text").text()).toEqual("111");
});

it("renders div with entered pin and reacts to delete", () => {
  const hotelSafeContainer = shallow(<HotelSafeContainer />);

  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });

  hotelSafeContainer.simulate("keyup", { key: "Delete" });
  const displayPanel = hotelSafeContainer.find(DisplayPanel).dive();

  expect(displayPanel.find("div.display-text").text()).toEqual("");
});

it("on wrong pin submission sets the error to indicator status error", () => {
  const hotelSafeContainer = shallow(<HotelSafeContainer />);

  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: "Enter" });

  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 3 });
  hotelSafeContainer.simulate("keyup", { key: "Enter" });

  const displayPanel = hotelSafeContainer.find(DisplayPanel).dive();
  expect(
    displayPanel.find("div.indicator").get(0).props.style.backgroundColor
  ).toEqual(INDICATOR_STATUS.error);
});

it("on correct pin submission sets the error to indicator status unlocked", () => {
  const hotelSafeContainer = shallow(<HotelSafeContainer />);

  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: "Enter" });

  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: 1 });
  hotelSafeContainer.simulate("keyup", { key: "Enter" });

  const displayPanel = hotelSafeContainer.find(DisplayPanel).dive();
  expect(
    displayPanel.find("div.indicator").get(0).props.style.backgroundColor
  ).toEqual(INDICATOR_STATUS.unlock);
});
