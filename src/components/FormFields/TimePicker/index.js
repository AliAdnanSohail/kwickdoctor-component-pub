import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import styles from './styles';

export default class TimePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultInputText: this.props.defaultInputText,
      selectedHours: '01',
      selectedMin: '00',
      hoursTouched: false,
      minutesTouched: false,
      visibleHoursList: false,
      visibleMinutesList: false,
      visibleTimeBlock: false,
      hours: [...Array(24).keys()],
      minutes: [...Array(60).keys()],
    };
  }

  changeTime() {
    this.setState({ defaultInputText: `${this.state.selectedHours}:${this.state.selectedMin}` });
    this.props.onChange();
  }

  changeMin(event) {
    this.setState({ selectedMin: event.target.textContent });
    setTimeout(() => {
      this.changeTime();
      this.setState(prevState => ({ minutesTouched: !prevState.minutesTouched }));
      this.timeBlockController();
    }, 0);
  }

  changeHours(event) {
    this.setState({ selectedHours: event.target.textContent });
    setTimeout(() => {
      this.changeTime();
      this.setState(prevState => ({ hoursTouched: !prevState.hoursTouched }));
      this.timeBlockController();
    }, 0);
  }

  timeBlockController() {
    if (this.state.hoursTouched && this.state.minutesTouched) {
      this.switchTimeBlock();
    }
  }

  switchHoursList() {
    this.setState(prevState => ({ visibleHoursList: !prevState.visibleHoursList }));
  }

  switchMinutesList() {
    this.setState(prevState => ({ visibleMinutesList: !prevState.visibleMinutesList }));
  }

  switchTimeBlock() {
    this.setState(prevState => ({ visibleTimeBlock: !prevState.visibleTimeBlock }));
    this.setState({ hoursTouched: false });
    this.setState({ minutesTouched: false });
  }

  renderHoursList() {
    if (this.state.visibleHoursList) {
      return (
        <Fragment>
          <div className="select__options-wrap">
            {this.state.hours.map(time => (
              <div
                role="button"
                tabIndex="0"
                onClick={e => this.changeHours(e)}
                onKeyPress={e => this.changeHours(e)}
                className={classnames('select__option', {
                  select__option_selected: this.state.selectedHours === time.value,
                })}
                key={time.value}
              >
                {time < 10 ? `0${time}` : time}
              </div>
            ))}
          </div>
          <style jsx>{styles}</style>
        </Fragment>
      );
    }
    return '';
  }

  renderMinutesList() {
    if (this.state.visibleMinutesList) {
      return (
        <Fragment>
          <div className="select__options-wrap">
            {this.state.minutes.map(time => (
              <div
                role="button"
                tabIndex="0"
                className={classnames('select__option', {
                  select__option_selected: this.state.selectedMin === time.value,
                })}
                key={time.value}
                onClick={e => this.changeMin(e)}
                onKeyPress={e => this.changeMin(e)}
              >
                {time < 10 ? `0${time}` : time}
              </div>
            ))}
          </div>
          <style jsx>{styles}</style>
        </Fragment>
      );
    }
    return '';
  }

  renderTimeBlock() {
    if (this.state.visibleTimeBlock) {
      return (
        <div className="time-picker__get-time">
          <div className="time-picker__get-time-wrap">
            <div
              className="select"
              role="button"
              tabIndex="0"
              onClick={e => this.switchHoursList(e)}
              onKeyPress={e => this.switchHoursList(e)}
            >
              <div className="select__field">
                {this.state.selectedHours}
                <div className="select__arrow">
                  <i className="material-icons">keyboard_arrow_left</i>
                </div>
                {this.renderHoursList()}
              </div>
            </div>
            <div
              className="select"
              role="button"
              tabIndex="0"
              onClick={e => this.switchMinutesList(e)}
              onKeyPress={e => this.switchMinutesList(e)}
            >
              <div className="select__field">
                {this.state.selectedMin}
                <div className="select__arrow">
                  <i className="material-icons">keyboard_arrow_right</i>
                </div>
                {this.renderMinutesList()}
              </div>
            </div>
          </div>
          <style jsx>{styles}</style>
        </div>
      );
    }
    return '';
  }

  render() {
    const { title, onChange } = this.props;

    return (
      <section className="time-picker">
        <div className="time-picker__wrapper">
          <div className="time-picker__title">{title}</div>
          <div
            className="time-picker__input"
            role="button"
            tabIndex="0"
            onClick={e => this.switchTimeBlock(e)}
            onKeyPress={e => this.switchTimeBlock(e)}
          >
            <div className="time-picker__logo">
              <i className="material-icons">access_time</i>
            </div>
            <input
              type="text"
              className="input"
              onChange={onChange}
              value={this.state.defaultInputText}
            />
          </div>
          {this.renderTimeBlock()}
        </div>
        <style jsx>{styles}</style>
      </section>
    );
  }
}

TimePicker.propTypes = {
  defaultInputText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

TimePicker.defaultProps = {};
