import React, { Component } from "react";
import InputPanel from "./InputPanel";
import DisplayPanel from "./DisplayPanel";
// import { PIN_CODE_LENGTH } from "./HotelSafeConstants";

import "./HotelSafeContainer.css";

class HotelSafeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { pinCode: "" };
    this.onInput = this.onInput.bind(this);
  }

  onInput(input) {
    this.setState(prevState => ({ pinCode: prevState.pinCode + input }));
  }

  render() {
    return (
      <div className="hotel-safe-container">
        <InputPanel onButtonClick={this.onInput} />
        <DisplayPanel displayText={this.state.pinCode} />
      </div>
    );
  }
}

export default HotelSafeContainer;
