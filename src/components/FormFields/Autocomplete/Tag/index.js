import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './styles';

export default class Tag extends Component {
  render() {
    const { name, onRemove } = this.props;

    return (
      <div className="tag">
        <div className="tag__text">{name}</div>
        <button className="tag__button" onClick={onRemove}>
          <i className="material-icons">close</i>
        </button>

        <style jsx>{styles}</style>
      </div>
    );
  }
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
