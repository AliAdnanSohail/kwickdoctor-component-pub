import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import css from 'styled-jsx/css';

import styles from './styles';

export default class Button extends Component {
  getSize = () => {
    const { rounded, size } = this.props;

    return rounded ? { width: `${size}px`, height: `${size}px` } : {};
  };

  getIconStyle = () => {
    const { size } = this.props;

    return css`
      button svg {
        width: ${size / 2}px !important;
        height: ${size / 2}px !important;
      }
    `;
  };

  render() {
    const {
      accent,
      children,
      danger,
      icon,
      rounded,
      squared,
      title,
      transparent,
      onClick,
    } = this.props;

    const classes = classnames(
      'button',
      { 'button--accent': accent },
      { 'button--danger': danger },
      { 'button--rounded': rounded },
      { 'button--squared': squared },
      { 'button--transparent': transparent },
    );

    return (
      <button className={classes} onClick={onClick} style={this.getSize()}>
        {rounded && icon ? icon : title || children}

        <style>{styles}</style>
        <style>{rounded && icon && this.getIconStyle()}</style>
      </button>
    );
  }
}

Button.propTypes = {
  accent: PropTypes.bool,
  children: PropTypes.element,
  danger: PropTypes.bool,
  icon: PropTypes.element,
  rounded: PropTypes.bool,
  size: PropTypes.number,
  squared: PropTypes.bool,
  title: PropTypes.string,
  transparent: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  accent: false,
  children: null,
  danger: false,
  icon: null,
  rounded: false,
  size: 40,
  squared: false,
  title: null,
  transparent: false,
  onClick: null,
};
