import "./ButtonMD.scss";
import React, { Component } from "react";
//import { Icon } from "./../../src/components/simple/IconFont";
import { Button, FontIcon } from "react-md";
import classNames from "classnames";
import propTypes from "prop-types";

// Really just a wrapper for the FontIcon component from react-md
// This allows us to extend the component

export default class ButtonMD extends Component {
  static propTypes = {
    class: propTypes.string,
    children: propTypes.object,
    size: propTypes.string,
    onClick: propTypes.func,
    type: propTypes.string,
    variation: propTypes.string,
    fullWidth: propTypes.bool,
    icon: propTypes.string,
    disabled: propTypes.bool
  };

  render() {
    const btnClass = classNames("btn", [`btn--${this.props.variation}`], {
      [`btn--${this.props.class}`]: this.props.class,
      "btn--large": this.props.size === "large",
      "btn--medium": this.props.size === "medium",
      "btn--small": this.props.size === "small" || !this.props.size,
      "btn--full-width": this.props.fullWidth,
      "btn--danger": this.props.type === "danger"
    });

    let btnType = {};
    switch (this.props.type) {
      case "primary":
        btnType["primary"] = true;
        break;

      case "secondary":
        btnType["secondary"] = true;
        break;

      default:
        break;
    }

    let btnVariation = {};
    switch (this.props.variation) {
      case "flat":
        btnVariation["flat"] = true;
        break;

      case "raised":
        btnVariation["raised"] = true;
        break;

      default:
        btnVariation = null;
        break;
    }

    let btnIcon = this.props.icon || null;
    let btnDisabled = {};
    btnDisabled["disabled"] = this.props.disabled || false;

    console.log("TEST DISABLED: ", this.props.disabled);

    return (
      <Button
        onClick={e => this.props.onClick}
        iconEl={<FontIcon className={btnIcon} />}
        className={btnClass} //"button light large full-width"
        {...btnType}
        {...btnVariation}
        {...btnDisabled}
      >
        {this.props.children}
      </Button>
    );
  }
}
