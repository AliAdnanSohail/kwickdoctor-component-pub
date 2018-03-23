import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './../styles';

export default class CalendarDay extends React.Component {
  getEventsPoints = () => {
    const { events, selected } = this.props;
    if (!selected || !events.length) {
      return null;
    }
    const eventsList = events.map((event, index) => (
      <React.Fragment key={index}>
        <li className="calendar__month-day-events-list-event" />
        <style jsx>{styles}</style>
      </React.Fragment>
    ));

    return (
      <ul className="calendar__month-day-events-list">
        {eventsList}
        <style jsx>{styles}</style>
      </ul>
    );
  }

  clickHandler = () => {
    this.props.onClick(this.props.moment, this.props.events);
  }

  render() {
    const {
      day,
      isNotPageMonth,
      weekEnd,
      events,
      now,
      selected,
    } = this.props;
    const classes = classnames(
      'calendar__month-day',
      { 'calendar__month-day--not-current-month': isNotPageMonth },
      { 'calendar__month-day--weekend': weekEnd },
      { 'calendar__month-day--events': events.length },
      { 'calendar__month-day--selected': selected },
      { 'calendar__month-day--now': !!now },
    );
    const eventsList = this.getEventsPoints();

    return (
      <li onClick={this.clickHandler} className={classes}>
        {day}
        {eventsList}
        <style jsx>{styles}</style>
      </li>
    );
  }
}

CalendarDay.propTypes = {
  day: PropTypes.number.isRequired,
  isNotPageMonth: PropTypes.bool.isRequired,
  weekEnd: PropTypes.bool.isRequired,
  events: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  now: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  moment: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  selected: PropTypes.bool.isRequired,
};
