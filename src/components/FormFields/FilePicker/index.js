import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CloseIcon, DocumentIcon, UploadIcon } from 'grommet/components/icons/base';

import styles from './styles';
import { Button } from '../';

export default class FilePicker extends Component {
  constructor(props) {
    super(props);

    this.state = { filename: '' };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  handleChange = (event) => {
    const { input } = this.props;
    input.onChange(event.target.files[0]);
  };

  render() {
    const {
      id,
      input: { value, ...inputProps },
      placeholder,
      resetKey,
    } = this.props;

    const { filename } = this.state;

    const classes = classnames('upload-file', { 'upload-file--selected': value });

    return (
      <label className={classes} htmlFor={id}>
        <div className="upload-file__label-container">
          {value ? <DocumentIcon /> : <UploadIcon />}

          <div className="upload-file__label">{filename || placeholder}</div>
        </div>

        {value && (
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
          {...inputProps}
          className="input-file"
          id={id}
          key={resetKey}
          onBlur={() => {}}
          onChange={this.handleChange}
          type="file"
        />

        <style jsx>{styles}</style>
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
    value: '',
  },
  placeholder: 'Upload file',
};
