import React, { Component } from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import PropTypes from 'prop-types';

import Month from './Month';
import { header, navigation, calendar as calendarStyles } from './styles';

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

  getEvents = date =>
    (this.props.hasEvents ? this.props.events.filter(event => date.isSame(event.date, 'day')) : []);

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

    const days = [];
    const momentDays = moment()
      .range(start, end)
      .by('days');

    for (const day of momentDays) {
      days.push(day);
    }

    return days.map(day => ({
      day,
      disabled: (min && day.isBefore(min, 'day')) || (max && day.isAfter(max, 'day')),
      selected: day.isSame(selected, 'day'),
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
        <button className="prev" onClick={() => this.onChangeMonth(-1)}>
          <i className="material-icons">navigate_before</i>
        </button>

        <div className="navigation__month">
          {current.format('MMMM')}
          <span>·</span>
          {current.format('YYYY')}
        </div>

        <button className="next" onClick={() => this.onChangeMonth(1)}>
          <i className="material-icons">navigate_next</i>
        </button>

        <style jsx>{navigation}</style>
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

      <style jsx>{header}</style>
    </div>
  );

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        <Month days={this.getDays()} />

        <style jsx>{calendarStyles}</style>
      </div>
    );
  }
}

Calendar.propTypes = {
  events: PropTypes.array,
  hasEvents: PropTypes.bool,
  min: PropTypes.object,
  max: PropTypes.object,
  onSelect: PropTypes.func,
  selected: PropTypes.object,
};

Calendar.defaultProps = {
  events: [],
  hasEvents: false,
  min: undefined,
  max: undefined,
  onSelect: () => {},
  selected: moment(),
};
