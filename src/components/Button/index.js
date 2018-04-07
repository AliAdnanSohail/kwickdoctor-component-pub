import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import css from 'styled-jsx/css';

import { SpinningIcon } from 'grommet/components/icons';

import styles from './styles';

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = { top: '50%', left: '50%' };
  }

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

  handleMouseEnter = (event) => {
    const { top, left } = this.button.getBoundingClientRect();

    this.setState({ top: event.pageY - top, left: event.pageX - left });
  };

  renderContent = () => {
    const {
      children, icon, loading, rounded,
    } = this.props;

    if (rounded && icon) {
      return (
        <Fragment>
          {loading ? <SpinningIcon size="small" className="button__loading-icon" /> : icon}

          <style>{this.getIconStyle()}</style>
        </Fragment>
      );
    }

    return (
      <Fragment>
        {loading ? <SpinningIcon size="small" className="button__loading-icon" /> : undefined}
        <span className="button__content">{children}</span>
      </Fragment>
    );
  };

  render() {
    const {
      accent,
      danger,
      disabled,
      loading,
      rounded,
      squared,
      transparent,
      onClick,
    } = this.props;

    const { top, left } = this.state;

    const classes = classnames(
      'button',
      { 'button--accent': accent },
      { 'button--danger': danger },
      { 'button--disabled': disabled },
      { 'button--loading': loading },
      { 'button--rounded': rounded },
      { 'button--squared': squared },
      { 'button--transparent': transparent },
    );

    return (
      <button
        ref={(button) => {
          this.button = button;
        }}
        className={classes}
        onClick={onClick}
        onMouseEnter={this.handleMouseEnter}
        style={this.getSize()}
        disabled={disabled}
      >
        {this.renderContent()}

        <span className="button__wave" style={{ top, left }} />

        <style>{styles}</style>
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.element,
  size: PropTypes.number,
  accent: PropTypes.bool,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  rounded: PropTypes.bool,
  squared: PropTypes.bool,
  transparent: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  icon: null,
  size: 40,
  accent: false,
  danger: false,
  disabled: false,
  loading: false,
  rounded: false,
  squared: false,
  transparent: false,
  onClick: null,
};
