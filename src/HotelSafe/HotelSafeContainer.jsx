import React, { Component } from "react";
import InputPanel from "./InputPanel";
import DisplayPanel from "./DisplayPanel";
import {
  defaultState,
  pinSubmissionAction,
  onDigitEntry,
  clearPin
} from "./hotelSafeMachine";

import "./HotelSafeContainer.css";

class HotelSafeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPinCode: "",
      pinCode: "",
      hotelMachineState: defaultState
    };

    this.onInput = this.onInput.bind(this);
  }

  onInput(input) {
    switch (input) {
      case "Enter":
        this.setState(pinSubmissionAction);
        return;

      case "Delete":
        this.setState(clearPin);
        return;
      default:
        this.setState(state => onDigitEntry(state, input));
    }
  }

  render() {
    return (
      <div className="hotel-safe-container">
        <InputPanel onButtonClick={this.onInput} />
        <DisplayPanel
          displayText={this.state.pinCode}
          hotelMachineState={this.state.hotelMachineState}
        />
      </div>
    );
  }
}

export default HotelSafeContainer;
