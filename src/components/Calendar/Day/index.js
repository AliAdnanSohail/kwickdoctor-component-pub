import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { day as dayStyles, events as eventsStyles } from './styles';

export default class Day extends Component {
  handleSelect = () => {
    const {
      day, disabled, events, onSelect,
    } = this.props;

    if (!disabled) {
      onSelect(day, events);
    }
  };

  renderDots = () => {
    const { events, selected } = this.props;

    return (
      selected &&
      events.length > 0 && (
        <ul className="events">
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

    const classes = classnames('day', {
      'day--selected': selected,
      'day--has-events': selected && events.length > 0,
      'day--disabled': disabled,
    });

    return (
      <button
        className={classes}
        data-day={day.format('YYYY-MM-DD')}
        onClick={this.handleSelect}
        type="button"
      >
        <span className="day__border">{day.format('D')}</span>
        {this.renderDots()}

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
