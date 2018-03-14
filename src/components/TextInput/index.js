import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput as GTextInput } from 'grommet';

import { textInput } from './styles.scss';

export default class TextInput extends Component {
  render() {
    const {
      id, label, name, placeholder, onChange,
    } = this.props;

    return (
      <label htmlFor={id}>
        {label}
        <GTextInput
          id={id}
          name={name}
          onDOMChange={onChange}
          placeHolder={placeholder}
          className={textInput}
        />
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
