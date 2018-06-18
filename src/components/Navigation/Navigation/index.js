import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Navigation extends Component {
  render() {
    const {
      children, className, before, after,
    } = this.props;

    const classes = classnames('nav', className);

    return (
      <nav className={classes}>
        {before}
        <ul className="nav__list">{children}</ul>
        {after}

        <style jsx>{styles}</style>
      </nav>
    );
  }
}

Navigation.propTypes = {
  after: PropTypes.element,
  before: PropTypes.element,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Navigation.defaultProps = {
  after: undefined,
  before: undefined,
  className: undefined,
};
