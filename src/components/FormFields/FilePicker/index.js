import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MaterialIcon from 'material-icons-react';
import { CloseIcon, DocumentIcon, UploadIcon } from 'grommet/components/icons/base';

import styles from './styles';
import { error as errorStyles } from '../styles';
import { Button } from '../../';

export default class FilePicker extends Component {
  handleChange = (event) => {
    const { input } = this.props;

    const file = event.target.files[0];

    input.onChange(file);
  };

  handleRemove = (event) => {
    event.preventDefault();

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

    const classes = classnames('upload-file', { 'upload-file--selected': value.name });

    return (
      <label className={classes} htmlFor={id}>
        <div className="upload-file__label-container">
          {value.name ? <DocumentIcon /> : <MaterialIcon icon="cloud_upload" color="#0c97f9" size={28} />}

          <div className="upload-file__label">{value.name || placeholder}</div>
        </div>

        {value.name && (
          <Button
            className="upload-file__close-icon"
            flat
            icon={<MaterialIcon icon="close" color="#828282" size={16} />}
            onClick={this.handleRemove}
            rounded
            size="xs"
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
  input: PropTypes.object,
  placeholder: PropTypes.string,
};

FilePicker.defaultProps = {
  input: {
    onChange: () => {},
    value: {},
  },
  placeholder: 'Upload file',
};
