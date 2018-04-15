import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import DisplayPanel from "./DisplayPanel";
import { HotelMachineStates, INDICATOR_STATUS } from "../HotelSafeConstants";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DisplayPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders parent div with display-panel class", () => {
  const displayPanel = shallow(<DisplayPanel />);

  expect(displayPanel.find("div.display-panel").length).toEqual(1);
});

it("renders div with display_text", () => {
  const displayPanel = shallow(<DisplayPanel displayText="1234" />);

  expect(displayPanel.find("div.display-text").text()).toEqual("1234");
});

it("renders div with indicator style for given status", () => {
  const displayPanel = shallow(
    <DisplayPanel
      displayText="1234"
      hotelMachineState={HotelMachineStates.ERROR}
    />
  );
  expect(
    displayPanel.find("div.indicator").get(0).props.style.backgroundColor
  ).toEqual(INDICATOR_STATUS.error);
});
