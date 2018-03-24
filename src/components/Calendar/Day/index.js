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

    return (
      selected &&
      events.length > 0 && (
        <ul className="events">
          {events.map(event => (
            <li key={`${event.date.format('D')}-${Math.random()}`} className="events__item" />
          ))}
          <style jsx>{eventsStyles}</style>
        </ul>
      )
    );
  };

  render() {
    const { day, selected, disabled } = this.props;

    const classes = classnames('day', { 'day--selected': selected }, { 'day--disabled': disabled });

    return (
      <button className={classes} type="button" onClick={this.onSelect}>
        {day.format('D')}
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
