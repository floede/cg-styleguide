import "./popup.scss";
import React, { Component } from "react";

export default class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup__top">
          <h1 className="popup__header">{this.props.header}</h1>
          <svg
            className="popup__bg"
            width="594"
            height="131.188"
            viewBox="0 0 594 131.188"
          >
            <g id="header" transform="translate(-663 -325)">
              <path
                id="header"
                data-name="Path 649"
                d="M627.148,194l36.073,26.209L677,262.616v62.573H83V194Z"
                transform="translate(580 131)"
                fill="#333"
              />
            </g>
          </svg>
        </div>
        <div className="popup__image">
          <img src={this.props.image} />
        </div>
        <div className="popup__text">{this.props.text}</div>
        <div className="popup__btns">buttons</div>
      </div>
    );
  }
}
