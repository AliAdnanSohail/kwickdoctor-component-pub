import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

export default class Button extends Component {
  render() {
    const {
      title, onClick, transparent, squared, accent,
    } = this.props;

    const classes = classnames('button', { transparent }, { squared }, { accent });

    return (
      <button className={classes} onClick={onClick}>
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
};

Button.defaultProps = {
  transparent: false,
  squared: false,
  accent: false,
};
