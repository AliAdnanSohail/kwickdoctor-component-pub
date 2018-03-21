import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './../styles';

export default class CalendarDay extends React.Component {
  getEventsPoints = () => {
    const { events } = this.props;
    if (!events.length) {
      return null;
    }
    const eventsList = events.map((event, index) => (
      <React.Fragment key={index}>
        <li className="calendar__month__day__events-list__event" />
        <style jsx>{styles}</style>
      </React.Fragment>
    ));

    return (
      <ul className="calendar__month__day__events-list">
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
    } = this.props;
    const classes = classnames(
      'calendar__month__day',
      { 'calendar__month__day_not-current-month': isNotPageMonth },
      { calendar__month__day_weekend: weekEnd },
      { calendar__month__day_events: events.length },
      { calendar__month__day_now: !!now },
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
};
