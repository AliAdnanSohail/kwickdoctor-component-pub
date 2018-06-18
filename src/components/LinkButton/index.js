import React, { Component } from 'react';
import classnames from 'classnames';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';
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
      link,
      rounded,
      size,
      squared,
      transparent,
    } = this.props;

    const classes = classnames(
      'button',
      className,
      { [`button--${size}`]: size },
      { 'button--accent': accent },
      { 'button--danger': danger },
      { 'button--flat': flat },
      { 'button--with-icon': icon },
      { 'button--rounded': rounded },
      { 'button--squared': squared },
      { 'button--transparent': transparent },
    );

    return (
      <NavLink className={classes} to={link}>
        {icon && (
          <span className="button__icon">
            <MaterialIcon icon={icon} />
          </span>
        )}
        {!rounded && <span className="button__content">{children}</span>}

        <style jsx global>{styles}</style>
      </NavLink>
    );
  }
}

LinkButton.propTypes = {
  accent: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  danger: PropTypes.bool,
  flat: PropTypes.bool,
  icon: PropTypes.element,
  link: PropTypes.string,
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
  icon: null,
  link: '/',
  rounded: false,
  size: undefined,
  squared: false,
  transparent: false,
};
