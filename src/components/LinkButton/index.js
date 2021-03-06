import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles';

export default class LinkButton extends Component {
  render() {
    const {
      accent,
      className,
      children,
      danger,
      flat,
      icon,
      to,
      rounded,
      size,
      squared,
      transparent,
    } = this.props;

    const classes = classnames('button', className, {
      [`button--${size}`]: size,
      'button--accent': accent,
      'button--danger': danger,
      'button--flat': flat,
      'button--with-icon': icon,
      'button--rounded': rounded,
      'button--squared': squared,
      'button--transparent': transparent,
    });

    return (
      <NavLink className={classes} to={to}>
        {icon && <span className="button__icon">{icon}</span>}
        {!rounded && <span className="button__content">{children}</span>}
        <style jsx global>
          {styles}
        </style>
      </NavLink>
    );
  }
}

LinkButton.propTypes = {
  accent: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  danger: PropTypes.bool,
  flat: PropTypes.bool,
  icon: PropTypes.string,
  to: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'xsmall', '']),
  squared: PropTypes.bool,
  transparent: PropTypes.bool,
};

LinkButton.defaultProps = {
  accent: false,
  children: null,
  className: '',
  danger: false,
  flat: false,
  icon: '',
  to: '/',
  rounded: false,
  size: undefined,
  squared: false,
  transparent: false,
};
