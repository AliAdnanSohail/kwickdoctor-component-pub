import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './styles';

export default class LinkButton extends Component {
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  renderContent = () => {
    const {
      children, icon, rounded,
    } = this.props;

    return (
      <Fragment>
        {icon && React.cloneElement(icon, { className: 'button__icon' })}
        {!rounded && <span className="button__content">{children}</span>}
      </Fragment>
    );
  };

  render() {
    const {
      accent,
      className,
      danger,
      disabled,
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
      { 'button--disabled': disabled },
      { 'button--flat': flat },
      { 'button--with-icon': icon },
      { 'button--rounded': rounded },
      { 'button--squared': squared },
      { 'button--transparent': transparent },
    );

    return (
      <Fragment>
        <Link
          href
          to={link}
          className={classes}
          disabled={disabled}
        >
          {this.renderContent()}

        </Link>
        <style jsx>{styles}</style>
      </Fragment>
    );
  }
}

LinkButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  icon: PropTypes.element,
  size: PropTypes.oneOf(['s', 'xs', '']),
  accent: PropTypes.bool,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  rounded: PropTypes.bool,
  squared: PropTypes.bool,
  transparent: PropTypes.bool,
  link: PropTypes.string,
};

LinkButton.defaultProps = {
  className: '',
  children: null,
  icon: null,
  size: undefined,
  accent: false,
  danger: false,
  disabled: false,
  flat: false,
  link: 'пппп',
  rounded: false,
  squared: false,
  transparent: false,
};
