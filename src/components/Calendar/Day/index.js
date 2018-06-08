import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { day as dayStyles, events as eventsStyles } from './styles';

export default class Day extends Component {
  onSelect = () => {
    if (!this.props.disabled) {
      this.props.onSelect(this.props.day, this.props.events);
    }
  };

  getDots = () => {
    const { events, selected } = this.props;
    const classes = classnames('events', `events-qty-${events.slice(0, 3).length}`);

    return (
      selected &&
      events.length > 0 && (
        <ul className={classes}>
          {events
            .slice(0, 3)
            .map(event => (
              <li key={`${event.date.format('D')}-${Math.random()}`} className="events__item" />
            ))}

          <style jsx>{eventsStyles}</style>
        </ul>
      )
    );
  };

  render() {
    const {
      day, selected, disabled, events,
    } = this.props;

    const classes = classnames(
      'day',
      { 'day--selected--without-events': selected && !events.length },
      { 'day--selected--with-events': selected && !!events.length },
      { 'day--disabled': disabled },
    );

    return (
      <button
        className={classes}
        data-day={day.format('YYYY-MM-DD')}
        onClick={this.onSelect}
        type="button"
      >
        <span className="day__border">{day.format('D')}</span>
        {this.getDots()}

        <style jsx>{dayStyles}</style>
      </button>
    );
  }
}

Day.propTypes = {
  day: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  events: PropTypes.array,
  onSelect: PropTypes.func,
};

Day.defaultProps = {
  disabled: false,
  selected: false,
  events: [],
  onSelect: () => {},
};
