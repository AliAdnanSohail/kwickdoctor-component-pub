import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './styles';
import { error as errorStyles } from '../styles';
import Button from '../../Button';

export default class FilePicker extends Component {
  constructor(props) {
    super(props);

    this.state = { file: null };
  }

  componentWillMount() {
    const {
      baseURL,
      input: { value, onChange },
    } = this.props;

    if (value && typeof value === 'string') {
      fetch(`${baseURL}/${value}`, { method: 'GET' })
        .then(response => response.blob())
        .then((file) => {
          this.setState({ file }, () => {
            onChange(file);
          });
        });
    } else if (value && value instanceof Blob) {
      this.setState({ file: value }, () => {
        onChange(value);
      });
    }
  }

  componentDidUpdate(props) {
    const {
      baseURL,
      input: { value, onChange },
    } = this.props;

    if (value && props.input.value !== value && typeof value === 'string') {
      fetch(`${baseURL}/${value}`, { method: 'GET' })
        .then(response => response.blob())
        .then((file) => {
          this.setState({ file }, () => {
            onChange(this.state.file);
          });
        });
    }
  }

  handleChange = (event) => {
    const { input } = this.props;

    const file = event.target.files[0];

    this.setState({ file });

    input.onChange(file);
  };

  handleRemove = (event) => {
    event.preventDefault();

    this.setState({ file: null });

    this.input.value = null;

    this.props.input.onChange(null);
  };

  render() {
    const {
      id,
      input: { value, ...inputProps },
      meta,
      placeholder,
      resetKey,
    } = this.props;

    const { file } = this.state;

    const classes = classnames('upload-file', {
      'upload-file--selected': file,
    });

    return (
      <label className={classes} htmlFor={id}>
        <div className="upload-file__label-container">
          {file ? (
            <i className="material-icons">assessment</i>
          ) : (
            <i className="material-icons">cloud_upload</i>
          )}

          <div className="upload-file__label">{(file && file.name) || placeholder}</div>
        </div>

        {file && (
          <Button
            className="upload-file__close-icon"
            flat
            icon={<i className="material-icons">close</i>}
            onClick={this.handleRemove}
            rounded
            size="xsmall"
          />
        )}

        <input
          {...inputProps}
          className="input-file"
          id={id}
          key={resetKey}
          onBlur={(event) => {
            inputProps.onBlur(event.target.files[0]);
          }}
          onChange={this.handleChange}
          ref={(input) => {
            this.input = input;
          }}
          type="file"
        />

        {meta && meta.error && meta.touched && meta.invalid && !meta.dirty && meta.active
          && <div className="error">{meta.error}</div>}

        <style jsx>{styles}</style>
        <style jsx>{errorStyles}</style>
      </label>
    );
  }
}

FilePicker.propTypes = {
  baseURL: PropTypes.string,
  id: PropTypes.string.isRequired,
  input: PropTypes.object,
  placeholder: PropTypes.string,
};

FilePicker.defaultProps = {
  baseURL: '',
  input: {
    onChange: () => {},
    value: {},
  },
  placeholder: 'Upload file',
};
