import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Tag extends Component {
  render() {
    const { name, onRemove } = this.props;

    return (
      <div className="tag">
        <div className="tag__text">{name}</div>
        <button className="tag__button" onClick={onRemove}>
          <MaterialIcon icon="close" color="#000000" size={14} />
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
