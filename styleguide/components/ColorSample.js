import React from "react";
import PropTypes from "prop-types";

export default class ColorSample extends React.PureComponent {
  render() {
    const { name, value, rgb, width, height } = this.props;
    return (
      <div>
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: value,
            display: `inline-block`
          }}
        />
        <div>{name}</div>
        <div>Hex: {value}</div>
        <div>RGB: {rgb}</div>
      </div>
    );
  }
}

ColorSample.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  rgb: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

ColorSample.defaultProps = {
  width: 320,
  height: 180
};
