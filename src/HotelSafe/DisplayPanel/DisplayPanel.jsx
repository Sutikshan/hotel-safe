import React from "react";
import PropTypes from "prop-types";
import "./DisplayPanel.css";
import { INDICATOR_STATUS } from "../HotelSafeConstants";

function DisplayPanel({ displayText, indicatorStatus }) {
  return (
    <div className="display-panel">
      <div className="display-text">{displayText} </div>
      <div className="indicator" style={{ backgroundColor: indicatorStatus }} />
      {displayText}
    </div>
  );
}

DisplayPanel.propTypes = {
  displayText: PropTypes.string,
  indicatorStatus: PropTypes.string
};

DisplayPanel.defaultProps = {
  displayText: "",
  indicatorStatus: INDICATOR_STATUS.UNLOCK
};

export default DisplayPanel;
