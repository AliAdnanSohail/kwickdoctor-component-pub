import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
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
          <style jsx global>{styles}</style>
        </Link>
      </Fragment>
    );
  }
}

LinkButton.propTypes = {
  accent: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  icon: PropTypes.element,
  link: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['s', 'xs', '']),
  squared: PropTypes.bool,
  transparent: PropTypes.bool,
};

LinkButton.defaultProps = {
  accent: false,
  children: null,
  className: '',
  danger: false,
  disabled: false,
  flat: false,
  icon: null,
  link: '/',
  rounded: false,
  size: undefined,
  squared: false,
  transparent: false,
};
