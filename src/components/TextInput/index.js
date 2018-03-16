import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: props.value };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.onChange(event);
  }

  errorMessage() {
    const { error } = this.props;
    if (!error) {
      return null;
    }

    return (
      <div className="input-error">
        {error}
        <style jsx>{styles}</style>
      </div>
    );
  }

  render() {
    const {
      id, label, name, placeholder, error,
    } = this.props;
    const errorMessage = this.errorMessage();

    const classes = classnames(
      'text-input',
      { error },
    );

    return (
      <div>
        <label htmlFor={id}> {label}</label>
        <input
          id={id}
          name={name}
          onChange={this.handleChange}
          placeholder={placeholder}
          className={classes}
          value={this.state.value}
        />
        {errorMessage}
        <style jsx>{styles}</style>
      </div>
    );
  }
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  name: '',
  placeholder: '',
  label: '',
  value: '',
  error: '',
};
