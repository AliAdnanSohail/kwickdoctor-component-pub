import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

export default class Card extends Component {
  render() {
    const {
      children, rounded, style, className,
    } = this.props;

    const classes = classnames('card', className, { 'card--rounded': rounded });

    return (
      <div className={classes} style={style}>
        {children}

        <style jsx>{styles}</style>
      </div>
    );
  }
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.object,
  rounded: PropTypes.bool,
  style: PropTypes.object,
};

Card.defaultProps = {
  className: '',
  rounded: false,
  style: {},
};
