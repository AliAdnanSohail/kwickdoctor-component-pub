import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MaterialIcon from 'material-icons-react';

import styles from './styles';
import { error as errorStyles } from '../styles';
import Button from '../../Button';

export default class FilePicker extends Component {
  constructor(props) {
    super(props);

    this.state = { initialValue: props.initialValue };
  }

  componentWillMount() {
    const { input } = this.props;
    const { initialValue } = this.state;

    if (initialValue) {
      const fileEmpty = new File([''], 'file-empty', { type: 'image/png' });
      input.onChange(fileEmpty);
    }
  }

  handleChange = (event) => {
    const { input } = this.props;

    const file = event.target.files[0];

    input.onChange(file);
  };

  handleRemove = (event) => {
    event.preventDefault();

    const { initialValue } = this.state;

    this.input.value = null;

    this.props.input.onChange(null);

    if (initialValue) {
      this.props.onRemove();
      this.setState({ initialValue: '' });
    }
  };

  render() {
    const {
      id,
      input: { value, ...inputProps },
      meta,
      placeholder,
      resetKey,
    } = this.props;

    const { initialValue } = this.state;

    const classes = classnames('upload-file', {
      'upload-file--selected': initialValue || value.name,
    });

    return (
      <label className={classes} htmlFor={id}>
        <div className="upload-file__label-container">
          {initialValue || value.name ? (
            <MaterialIcon icon="assignment" color="#0c97f9" size={16} />
          ) : (
            <MaterialIcon icon="cloud_upload" color="#0c97f9" size={16} />
          )}

          <div className="upload-file__label">{initialValue || value.name || placeholder}</div>
        </div>

        {(initialValue || value.name) && (
          <Button
            className="upload-file__close-icon"
            flat
            icon="close"
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

        {meta && meta.error && meta.touched ? <div className="error">{meta.error}</div> : undefined}

        <style jsx>{styles}</style>
        <style jsx>{errorStyles}</style>
      </label>
    );
  }
}

FilePicker.propTypes = {
  id: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  input: PropTypes.object,
  onRemove: PropTypes.func,
  placeholder: PropTypes.string,
};

FilePicker.defaultProps = {
  input: {
    onChange: () => {},
    value: {},
  },
  initialValue: '',
  onRemove: () => {},
  placeholder: 'Upload file',
};
