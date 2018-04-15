import React from "react";
import PropTypes from "prop-types";
import { INDICATOR_STATUS, HotelMachineStates } from "../HotelSafeConstants";

function DisplayPanel({ displayText, hotelMachineState }) {
  return (
    <div className="display-panel">
      <div className="display-text">{displayText}</div>
      <div
        className="indicator"
        style={{ backgroundColor: INDICATOR_STATUS[hotelMachineState] }}
      />
    </div>
  );
}

DisplayPanel.propTypes = {
  displayText: PropTypes.string,
  hotelMachineState: PropTypes.oneOf([
    HotelMachineStates.LOCK,
    HotelMachineStates.UNLOCK,
    HotelMachineStates.ERROR
  ])
};

DisplayPanel.defaultProps = {
  displayText: "",
  hotelMachineState: HotelMachineStates.UNLOCK
};

export default DisplayPanel;
