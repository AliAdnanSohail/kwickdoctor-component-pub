import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

export default class Card extends Component {
  render() {
    const { children, rounded, style } = this.props;

    const classes = classnames('card', { rounded });

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
  rounded: PropTypes.bool,
  style: PropTypes.object,
};

Card.defaultProps = {
  rounded: false,
  style: {},
};
