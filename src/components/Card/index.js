import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Card extends Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={classnames('card', className)}>
        {children}

        <style jsx>{styles}</style>
      </div>
    );
  }
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

Card.defaultProps = {
  className: '',
};
