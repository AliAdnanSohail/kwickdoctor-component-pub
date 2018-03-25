import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles, { error as errorStyles, textInput, label as labelStyles } from './styles';

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

          <style jsx>{errorStyles}</style>
        </div>
      )
    );
  };

  inputElement = () => {
    const {
      id, name, placeholder, error, className, multiline,
    } = this.props;

    const classes = classnames(className, { error });

    const elementProps = {
      id,
      name,
      placeholder,
      className: classes,
      value: this.state.value,
      onChange: this.handleChange,
    };

    return (
      <Fragment>
        {multiline ? (
          <Fragment>
            <textarea {...elementProps} />
          </Fragment>
        ) : (
          <Fragment>
            <input type="text" {...elementProps} />
          </Fragment>
        )}
        <style>{textInput}</style>
      </Fragment>
    );
  };

  render() {
    const { id, label } = this.props;
    const input = this.inputElement();
    const errorMessage = this.errorMessage();

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        {input}
        {errorMessage}

        <style jsx>{styles}</style>
        <style jsx>{labelStyles}</style>
      </div>
    );
  }
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  multiline: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  name: '',
  placeholder: '',
  label: '',
  value: '',
  error: '',
  className: undefined,
  multiline: false,
};
