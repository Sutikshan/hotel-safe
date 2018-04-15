import React, { Component } from "react";
import InputPanel from "./InputPanel";
import DisplayPanel from "./DisplayPanel";
import {
  defaultState,
  pinSubmissionAction,
  backSpaceKeyPress,
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
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  componentWillMount() {
    document.addEventListener("keyup", this.onKeyUp);
  }

  onKeyUp(event) {
    this.onInput(event.key);
  }

  onInput(input) {
    switch (input) {
      case "Enter":
        this.setState(pinSubmissionAction);
        return;

      case "Delete":
        this.setState(clearPin);
        return;
      case "Backspace":
        this.setState(backSpaceKeyPress);
        return;
      default:
        this.setState(state => onDigitEntry(state, input));
    }
  }

  render() {
    return (
      <div className="hotel-safe-container" onKeyUp={this.onKeyUp}>
        <InputPanel onButtonClick={this.onInput} />
        <DisplayPanel
          displayText={this.state.pinCode}
          hotelMachineState={this.state.hotelMachineState}
        />
      </div>
    );
  }

  componentWillUnMount() {
    document.removeEventListener("keyup", this.onKeyUp);
  }
}

export default HotelSafeContainer;
