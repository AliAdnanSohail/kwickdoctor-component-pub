import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

export default class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.onChange(event);
  };

  errorMessage = () => {
    const { error } = this.props;

    return (
      error && (
        <div className="input-error">
          {error}
          <style jsx>{styles}</style>
        </div>
      )
    );
  };

  render() {
    const {
      id, label, name, placeholder, error, className,
    } = this.props;

    const classes = classnames('text-input', className, { error });

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          onChange={this.handleChange}
          placeholder={placeholder}
          className={classes}
          value={this.state.value}
        />
        {this.errorMessage()}
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
  className: PropTypes.string,
};

TextInput.defaultProps = {
  name: '',
  placeholder: '',
  label: '',
  value: '',
  error: '',
  className: undefined,
};
