import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'grommet/components/icons/base/Close';


import styles from './styles';

export default class Tag extends React.Component {
  render() {
    const { name, onRemoveClick } = this.props;
    return (
      <li className="tag-input__tag">
        <span className="tag-input__tag-wrapper">
          <span className="tag-input__tag-text">
            {name}
          </span>
          <button onClick={onRemoveClick}>
            <CloseIcon />
          </button>
        </span>
        <style jsx>{styles}</style>
      </li>
    );
  }
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

