import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export default class FileViewer extends Component {
  render() {
    const {
      title, onClick,
    } = this.props;

    return (
      <button onClick={onClick}>
        {title}

        <style jsx>{styles}</style>
      </button>
    );
  }
}

FileViewer.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
