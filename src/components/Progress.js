import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../index.css';

export default class Progress extends PureComponent {
  render() {
    const { percentage, size } = this.props;
    const strokeWidth = 5;
    const radius = size / 2 - strokeWidth;
    const centerX = size / 2;
    const centerY = size / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    return (
      <svg width={size} height={size}>
        <circle
          className="shadow"
          stroke="lightgray"
          strokeWidth={strokeWidth}
          fill="white"
          r={radius}
          cx={centerX}
          cy={centerY}
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: 0,
          }}
        />
        <circle
          className="stroke"
          stroke="#0290ff"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={centerX}
          cy={centerY}
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: offset,
          }}
        />
      </svg>
    );
  }
}

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
  size: PropTypes.number,
};

Progress.defaultProps = {
  size: 100,
};
