import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { NextIcon, PreviousIcon } from 'grommet/components/icons/base';

import Day from './Day';
import { header, navigation, calendar as calendarStyles, month as monthStyles } from './styles';

const moment = extendMoment(Moment);

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: props.selected.clone(), current: props.selected.clone() };
  }

  onSelect = (day, events) => {
    this.setState({ selected: day });
    this.props.onSelect(day, events);
  };

  onChangeMonth = count => this.setState({ current: this.state.current.add(count, 'month') });

  getEvents = date => this.props.events.filter(event => date.isSame(event.date, 'day'));

  getDays = () => {
    const { min, max } = this.props;
    const { selected, current } = this.state;

    const start = current
      .clone()
      .startOf('month')
      .weekday(0);

    const end = current
      .clone()
      .endOf('month')
      .weekday(6);

    const days = Array.from(moment()
      .range(start, end)
      .by('days'));

    return days.map(day => ({
      day,
      disabled: (min && day.isBefore(min, 'day')) || (max && day.isAfter(max, 'day')),
      selected: day.isSame(selected, 'month') && day.isSame(selected, 'day'),
      events: this.getEvents(day),
      onSelect: this.onSelect,
    }));
  };

  getWeekNames = () =>
    Array.from(new Array(7), (value, index) => index).map(item =>
      moment()
        .weekday(item)
        .format('ddd'));

  renderNavigation = () => {
    const { current } = this.state;

    return (
      <div className="navigation">
        <button onClick={() => this.onChangeMonth(-1)}>
          <PreviousIcon size="xsmall" />
        </button>

        <div className="navigation__month">
          {current.format('MMMM')}
          <span>·</span>
          {current.format('YYYY')}
        </div>

        <button onClick={() => this.onChangeMonth(1)}>
          <NextIcon size="xsmall" />
        </button>

        <style>{navigation}</style>
      </div>
    );
  };

  renderHeader = () => (
    <div>
      {this.renderNavigation()}

      <ul className="weekdays">
        {this.getWeekNames().map(item => (
          <li key={item} className="weekdays__item">
            {item}
          </li>
        ))}
      </ul>

      <style>{header}</style>
    </div>
  );

  renderMonth = () => (
    <ul className="month">
      {this.getDays().map(item => (
        <li key={`${item.day.format('YYYY-MM-DD')}-${Math.random()}`}>
          <Day {...item} />
        </li>
      ))}

      <style>{monthStyles}</style>
    </ul>
  );

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderMonth()}

        <style>{calendarStyles}</style>
      </div>
    );
  }
}

Calendar.propTypes = {
  min: PropTypes.object,
  max: PropTypes.object,
  selected: PropTypes.object,
  events: PropTypes.array,
  onSelect: PropTypes.func,
};

Calendar.defaultProps = {
  min: undefined,
  max: undefined,
  selected: moment(),
  events: [],
  onSelect: () => {},
};
