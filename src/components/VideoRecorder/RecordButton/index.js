import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

export default class RecordButton extends Component {
  render() {
    const { active, onClick } = this.props;

    const classes = classnames(
      'record-button',
      active ? 'record-button--stop' : 'record-button--start',
    );

    return (
      <button onClick={onClick} className={classes}>
        <style jsx>{styles}</style>
      </button>
    );
  }
}

RecordButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

RecordButton.defaultProps = {
  active: false,
};
