import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { title, onClick } = this.props;

    return (
      <button className="button" onClick={onClick}>
        {title}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
