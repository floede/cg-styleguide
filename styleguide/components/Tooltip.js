import "./Tooltip.scss";
import React, { Component } from "react";

export default class Tooltip extends Component {
  render() {
    return (
      <div className="tooltip">
        <div className="tooltip__content">
          {"An elegant weapon for a more civilized time"}
        </div>
      </div>
    );
  }
}
