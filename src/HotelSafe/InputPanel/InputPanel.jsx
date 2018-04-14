import React, { Component } from "react";
import PropTypes from "prop-types";
import { BUTTON_SET } from "../HotelSafeConstants";
import "./InputPanel.css";

class InputPanel extends Component {
  render() {
    const { onButtonClick } = this.props;
    const getButton = (label, value) => (
      <button
        key={value}
        className="input-button"
        onClick={() => onButtonClick(value)}
      >
        {label}
      </button>
    );

    return (
      <div className="input-panel">
        {BUTTON_SET.map(config => getButton(config.label, config.value))}
      </div>
    );
  }
}

InputPanel.propTypes = {
  onButtonClick: PropTypes.func
};
export default InputPanel;
