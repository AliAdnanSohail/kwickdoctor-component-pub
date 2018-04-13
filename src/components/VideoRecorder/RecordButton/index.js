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
      timerState: '00:00',
    };
  }

  getLabel = () => {
    if (!this.state.recordStarted) {
      return 'START RECORDING';
    }
    return this.state.timerState;
  }

  toogleRecord = () => {
    if (this.state.recordStarted) {
      this.deleteTimer();
      this.setState({ timerState: '00:00' });
    } else this.startTimer();
    this.setState({ recordStarted: !this.state.recordStarted });
    this.props.click();
  }

  startTimer = () => {
    let timer = 0;
    this.timerIntr = setInterval(() => {
      timer += 1;
      let minutes = parseInt(timer / 60, 10);
      let seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      this.setState({ timerState: `${minutes}:${seconds}` });
    }, 1000);
  }

  deleteTimer = () => {
    if (this.timerIntr) {
      clearInterval(this.timerIntr);
    }
  }

  render() {
    return (
      <div className="button_container">
        <p className="recordState" >{this.getLabel()}</p>
        <button className="record_button" onClick={this.toogleRecord}>
          <div className={this.state.recordStarted ? 'square' : 'circle'} />
          <style>{styles}</style>
        </button>
      </div>
    );
  }
}

