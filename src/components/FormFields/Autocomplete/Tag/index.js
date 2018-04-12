import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CloseIcon } from 'grommet/components/icons/base';

import styles from './styles';

export default class Tag extends Component {
  render() {
    const { name, onRemove } = this.props;

    return (
      <div className="tag">
        <div className="tag__text">{name}</div>
        <button className="tag__button" onClick={onRemove}>
          <CloseIcon />
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
