import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import css from 'styled-jsx/css';


import styles from './styles';

export default class RecordButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordStarted: false,
    };
  }

  changeStyle = () => {
    this.setState({ recordStarted: !this.state.recordStarted });
  }

  render() {
    return (
      <button className="record_button" onClick={this.changeStyle}>
        <div className={this.state.recordStarted ? 'square' : 'circle'} />
        <style>{styles}</style>
      </button>
    );
  }
}

