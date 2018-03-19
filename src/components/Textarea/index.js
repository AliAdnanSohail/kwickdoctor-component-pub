import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './../TextInput/styles';

export default class Textarea extends Component {
  constructor(props) {
    super(props);
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
      id, label, name, placeholder, error, className,
    } = this.props;
    const errorMessage = this.errorMessage();
    const classes = classnames(
      'text-input',
      className,
      { error },
    );

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          name={name}
          onChange={e => this.handleChange(e)}
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

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

Textarea.defaultProps = {
  name: '',
  placeholder: '',
  label: '',
  value: '',
  error: '',
  className: undefined,
};
