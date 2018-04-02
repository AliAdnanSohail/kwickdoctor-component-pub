import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import TextArea from './TextArea';
import styles, { label as labelStyles } from './styles';

export default class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.onChange(event);
  };

  inputElement = () => {
    const {
      id, name, placeholder, type, className, multiline, validations,
    } = this.props;

    const { value } = this.state;

    const props = {
      id,
      name,
      type,
      value,
      placeholder,
      validations,
      className,
      onChange: this.handleChange,
    };

    return multiline ? <TextArea name={name} {...props} /> : <Input name={name} {...props} />;
  };

  render() {
    const { id, label } = this.props;

    return (
      <div className="form-field">
        <label htmlFor={id}>{label}</label>
        {this.inputElement()}

        <style jsx>{styles}</style>
        <style jsx>{labelStyles}</style>
      </div>
    );
  }
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  multiline: PropTypes.bool,
  validations: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  name: '',
  label: '',
  value: '',
  type: 'text',
  placeholder: '',
  className: undefined,
  multiline: false,
  validations: [],
};
