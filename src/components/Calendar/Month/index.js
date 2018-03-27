import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './../Day';

import monthStyles from './styles';

export default class Month extends Component {
  render() {
    return (
      <ul className="month">
        {this.props.days.map(item => (
          <li key={`${item.day.format('YYYY-MM-DD')}-${Math.random()}`}>
            <Day {...item} />
          </li>
        ))}

        <style jsx>{monthStyles}</style>
      </ul>
    );
  }
}

Month.propTypes = {
  days: PropTypes.array,
};

Month.defaultProps = {
  days: [],
};
