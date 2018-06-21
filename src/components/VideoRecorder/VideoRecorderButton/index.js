import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

export default class VideoRecorderButton extends Component {
  render() {
    const { onClick, state } = this.props;

    return (
      <button onClick={onClick} className={classnames('record-button', `record-button--${state}`)}>
        <style jsx>{styles}</style>
      </button>
    );
  }
}

VideoRecorderButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.oneOf(['start', 'stop']).isRequired,
};
