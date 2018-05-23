import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ClockIcon, NextIcon, PreviousIcon } from 'grommet/components/icons/base';

import styles from './styles';

export default class TimePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultInputText: this.props.defaultInputText,
      selectedHours: '01',
      selectedMin: '00',
      hoursToched: false,
      minutsToched: false,
      visibleHoursList: false,
      visibleMinutsList: false,
      visibleTimeBlock: false,
      hours: [
        { value: '01' },
        { value: '02' },
        { value: '03' },
        { value: '04' },
        { value: '05' },
        { value: '06' },
        { value: '07' },
        { value: '08' },
        { value: '09' },
        { value: '10' },
        { value: '11' },
        { value: '12' },
      ],
      minuts: [{ value: '00' }, { value: '30' }],
    };

    this.classnames = classnames({
      'b-select__option_selected': true,
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  changeTime() {
    this.setState({ defaultInputText: `${this.state.selectedHours}:${this.state.selectedMin}` });
    this.props.onChange();
  }

  changeMin(event) {
    this.setState({ selectedMin: event.target.textContent });
    setTimeout(() => {
      this.changeTime();
      this.setState(prevState => ({ minutsToched: !prevState.minutsToched }));
      this.timeBlockController();
    }, 0);
  }

  changeHours(event) {
    this.setState({ selectedHours: event.target.textContent });
    setTimeout(() => {
      this.changeTime();
      this.setState(prevState => ({ hoursToched: !prevState.hoursToched }));
      this.timeBlockController();
    }, 0);
  }

  timeBlockController() {
    if (this.state.hoursToched && this.state.minutsToched) {
      this.switchTimeBlock();
    }
  }

  switchHoursList() {
    this.setState(prevState => ({ visibleHoursList: !prevState.visibleHoursList }));
  }

  switchMinutsList() {
    this.setState(prevState => ({ visibleMinutsList: !prevState.visibleMinutsList }));
  }

  switchTimeBlock() {
    this.setState(prevState => ({ visibleTimeBlock: !prevState.visibleTimeBlock }));
    this.setState({ hoursToched: false });
    this.setState({ minutsToched: false });
  }

  renderHoursList() {
    if (this.state.visibleHoursList) {
      return (
        <React.Fragment>
          <div className="b-select__options-wrap">
            {this.state.hours.map(time => (
              <div
                role="button"
                tabIndex="0"
                onClick={e => this.changeHours(e)}
                onKeyPress={e => this.changeHours(e)}
                className={classnames('b-select__option', {
                  'b-select__option_selected': this.state.selectedHours === time.value,
                })}
                key={time.value}
              >
                {time.value}
              </div>
            ))}
          </div>
          <style jsx>{styles}</style>
        </React.Fragment>
      );
    }
    return '';
  }

  renderMinuntsList() {
    if (this.state.visibleMinutsList) {
      return (
        <React.Fragment>
          <div className="b-select__options-wrap b-select__options-wrap_size_small">
            {this.state.minuts.map(time => (
              <div
                role="button"
                tabIndex="0"
                className={classnames('b-select__option', {
                  'b-select__option_selected': this.state.selectedMin === time.value,
                })}
                key={time.value}
                onClick={e => this.changeMin(e)}
                onKeyPress={e => this.changeMin(e)}
              >
                {time.value}
              </div>
            ))}
          </div>
          <style jsx>{styles}</style>
        </React.Fragment>
      );
    }
    return '';
  }

  renderTimeBlock() {
    if (this.state.visibleTimeBlock) {
      return (
        <div className="b-time-picker__get-time">
          <div className="b-time-picker__get-time-wrap">
            <div
              className="b-select"
              role="button"
              tabIndex="0"
              onClick={e => this.switchHoursList(e)}
              onKeyPress={e => this.switchHoursList(e)}
            >
              <div className="b-select__field">
                {this.state.selectedHours}
                <div className="b-select__arrow">
                  <PreviousIcon />
                </div>
                {this.renderHoursList()}
              </div>
            </div>
            <div
              className="b-select"
              role="button"
              tabIndex="0"
              onClick={e => this.switchMinutsList(e)}
              onKeyPress={e => this.switchMinutsList(e)}
            >
              <div className="b-select__field">
                {this.state.selectedMin}
                <div className="b-select__arrow">
                  <NextIcon />
                </div>
                {this.renderMinuntsList()}
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
    const classes = classnames('b-time-picker');

    return (
      <section className={classes}>
        <div className="b-time-picker__wrapper">
          <div className="b-time-picker__title">{title}</div>
          <div
            className="b-time-picker__input"
            role="button"
            tabIndex="0"
            onClick={e => this.switchTimeBlock(e)}
            onKeyPress={e => this.switchTimeBlock(e)}
          >
            <div className="b-time-picker__logo">
              <ClockIcon />
            </div>
            <input
              type="text"
              className="b-input"
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
  title: PropTypes.string.isRequired,
  defaultInputText: PropTypes.string.isRequired,
};

TimePicker.defaultProps = {};
