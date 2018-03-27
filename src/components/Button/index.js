import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

export default class Button extends Component {
  render() {
    const {
      title, onClick, transparent, squared, accent, circle, icon,
    } = this.props;

    const classes = classnames(
      'button',
      { 'button--transparent': transparent },
      { 'button--squared': squared },
      { 'button--accent': accent },
      { 'button--circle': circle },
    );

    return (
      <button className={classes} onClick={onClick} aria-label={title}>
        {icon}
        {!circle && title}
        <style jsx>{styles}</style>
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  transparent: PropTypes.bool,
  squared: PropTypes.bool,
  accent: PropTypes.bool,
  circle: PropTypes.bool,
  icon: PropTypes.element,
};

Button.defaultProps = {
  transparent: false,
  squared: false,
  circle: false,
  accent: false,
  icon: undefined,
};
