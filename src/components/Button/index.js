import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import css from 'styled-jsx/css';

import { SpinningIcon } from 'grommet/components/icons';

import styles from './styles';

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = { top: '50%', left: '50%', clicked: false };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  getIconStyle = () => {
    const { size } = this.props;

    return css`
      button svg {
        width: ${size / 2}px !important;
        height: ${size / 2}px !important;
      }
    `;
  };

  handleClick = (event) => {
    const { top, left } = this.button.getBoundingClientRect();

    this.setState(
      {
        top: event ? event.pageY - top : top,
        left: event ? event.pageX - left : left,
        clicked: true,
      },
      () => {
        this.timeout = setTimeout(() => {
          this.setState({ clicked: false });
        }, 300);
      },
    );

    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  renderContent = () => {
    const {
      children, icon, loading, rounded,
    } = this.props;

    return rounded && icon ? (
      <Fragment>
        {loading ? <SpinningIcon size="small" className="button__loading-icon" /> : icon}

        <style>{this.getIconStyle()}</style>
      </Fragment>
    ) : (
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
      flat,
      loading,
      rounded,
      size,
      squared,
      transparent,
    } = this.props;

    const { top, left, clicked } = this.state;

    const classes = classnames(
      'button',
      `button--${size}`,
      { 'button--accent': accent },
      { 'button--danger': danger },
      { 'button--disabled': disabled },
      { 'button--flat': flat },
      { 'button--loading': loading },
      { 'button--rounded': rounded },
      { 'button--squared': squared },
      { 'button--transparent': transparent },
      { 'has-clicked': clicked },
    );

    return (
      <button
        ref={(button) => {
          this.button = button;
        }}
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}
      >
        {this.renderContent()}

        {clicked && <span className="button__wave" style={{ top, left }} />}

        <style jsx>{styles}</style>
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.element,
  size: PropTypes.string,
  accent: PropTypes.bool,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  loading: PropTypes.bool,
  rounded: PropTypes.bool,
  squared: PropTypes.bool,
  transparent: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  icon: null,
  size: undefined,
  accent: false,
  danger: false,
  disabled: false,
  flat: false,
  loading: false,
  rounded: false,
  squared: false,
  transparent: false,
  onClick: null,
};
