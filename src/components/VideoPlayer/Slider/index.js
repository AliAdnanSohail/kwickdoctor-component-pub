import 'rc-slider/assets/index.css';
import React, { Component } from 'react';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';


export default class VideoSlider extends Component {
  constructor(props) {
    super(props);
    this.wrapperStyle = { width: this.props.width || '60%' };
  }

  render() {
  // this.getMediaDevices();
    return (
      <div style={this.wrapperStyle}>
        <Slider
          min={this.props.min}
          max={this.props.max}
          onChange={this.props.onChange}
          value={this.props.value}
          trackStyle={{ backgroundColor: '#bfdef2' }}
          handleStyle={{
            borderColor: '#bfdef2',
            backgroundColor: '#dee9ef',
          }}

          railStyle={{ backgroundColor: '#dee9ef' }}
        />
      </div>
    );
  }
}

VideoSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  width: PropTypes.string,
};


VideoSlider.defaultProps = {
  min: 0,
  max: 100,
  width: '60%',
};

