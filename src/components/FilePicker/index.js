import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CloseIcon, DocumentIcon, UploadIcon } from 'grommet/components/icons/base';

import styles from './styles';
import { Button } from '../';

export default class FilePicker extends Component {
  handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      const { name, type } = event.target.files[0];

      reader.onload = (e) => {
        const blob = new Blob([e.target.result], { type });

        this.props.onChange(blob, name);
      };

      reader.readAsArrayBuffer(event.target.files[0]);
    }
  };

  handleRemove = (event) => {
    event.stopPropagation();
    event.preventDefault();

    this.input.value = '';
    this.props.onChange();
  };

  render() {
    const {
      id, fileName, name, placeholder,
    } = this.props;

    const classes = classnames('upload-file', { 'upload-file--selected': fileName });

    return (
      <Fragment>
        <label className={classes} htmlFor={id}>
          <div className="upload-file__label-container">
            {fileName ? <DocumentIcon /> : <UploadIcon />}

            <div className="upload-file__label">{fileName || placeholder}</div>
          </div>

          {fileName && (
            <Button
              className="upload-file__close-icon"
              flat
              icon={<CloseIcon />}
              onClick={this.handleRemove}
              rounded
              size="xs"
            />
          )}

          <input
            className="input-file"
            id={id}
            name={name}
            onChange={this.handleChange}
            type="file"
            ref={(input) => {
              this.input = input;
            }}
          />
        </label>

        <style jsx>{styles}</style>
      </Fragment>
    );
  }
}

FilePicker.propTypes = {
  id: PropTypes.string.isRequired,
  fileName: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

FilePicker.defaultProps = {
  fileName: '',
  placeholder: 'Upload file',
};
