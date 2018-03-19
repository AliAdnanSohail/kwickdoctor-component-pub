import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

export default class Button extends Component {
  render() {
    const {
      title, onClick, transparent, squared, accent, social,
    } = this.props;

    const classes = classnames(
      'button',
      { 'button--transparent': transparent },
      { 'button--squared': squared },
      { 'button--accent': accent },
    );

    const circle = classnames('social', `social--${social}`);

    if (social) {
      return (
        <button className={circle} onClick={onClick} aria-label={social} >
          <style jsx>{styles}</style>
        </button>
      );
    }
    return (
      <button className={classes} onClick={onClick} aria-label={title} >
        {title}
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
  social: PropTypes.string,
};

Button.defaultProps = {
  transparent: false,
  squared: false,
  social: '',
};
