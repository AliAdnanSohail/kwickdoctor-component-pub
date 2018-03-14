import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export default class TextInput extends Component {
  render() {
    const {
      id, label, name, placeholder, onChange,
    } = this.props;

    return (
      <label htmlFor={id}>
        {label}
        <input
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className="text-input"
        />

        <style jsx>{styles}</style>
      </label>
    );
  }
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

TextInput.defaultProps = {
  name: '',
  placeholder: '',
  label: '',
};
