import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import css from 'styled-jsx/css';


import styles from './styles';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }


  render() {
    return (
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          value={this.props.value}
          className="slider"
          onChange={this.props.onChange}
        />
        <style>{styles}</style>
      </div>
    );
  }
}

