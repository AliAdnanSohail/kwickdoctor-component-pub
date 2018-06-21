import React, { Component } from 'react';
import classnames from 'classnames';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Button extends Component {
  constructor() {
    super();

    this.state = { top: 0, left: 0, clicked: false };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick = (event) => {
    const { top, left } = this.button.getBoundingClientRect();

    this.setState(
      {
        top: event && event.pageY ? event.pageY - top : top,
        left: event && event.pageX ? event.pageX - left : left,
        clicked: true,
      },
      () => {
        this.timeout = setTimeout(() => {
          this.setState({ clicked: false });
        }, 300);
      },
    );

    const { onClick } = this.props;

    if (onClick) {
      onClick(event);
    }
  };

  render() {
    const {
      accent,
      className,
      children,
      danger,
      disabled,
      flat,
      icon,
      loading,
      rounded,
      size,
      squared,
      transparent,
      type,
    } = this.props;

    const { top, left, clicked } = this.state;

    const classes = classnames('button', className, {
      [`button--${size}`]: size,
      'button--accent': accent,
      'button--danger': danger,
      'button--disabled': disabled,
      'button--flat': flat,
      'button--with-icon': icon || loading,
      'button--rounded': rounded,
      'button--squared': squared,
      'button--transparent': transparent,
      'has-clicked': clicked,
    });

    return (
      <button
        type={type}
        ref={(button) => {
          this.button = button;
        }}
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}
      >
        {loading && (
          <div className="button__icon button__loading-icon">
            <MaterialIcon icon="loop" />
          </div>
        )}
        {!loading &&
          icon && (
          <div className="button__icon">
            <MaterialIcon icon={icon} />
          </div>
        )}
        {!rounded && <span className="button__content">{children}</span>}

        {clicked && <span className="button__wave" style={{ top, left }} />}

        <style jsx>{styles}</style>
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  icon: PropTypes.string,
  size: PropTypes.oneOf(['small', 'xsmall', '']),
  accent: PropTypes.bool,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  loading: PropTypes.bool,
  rounded: PropTypes.bool,
  squared: PropTypes.bool,
  transparent: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  children: null,
  icon: '',
  size: undefined,
  accent: false,
  danger: false,
  disabled: false,
  flat: false,
  loading: false,
  rounded: false,
  squared: false,
  transparent: false,
  type: 'button',
  onClick: null,
};
