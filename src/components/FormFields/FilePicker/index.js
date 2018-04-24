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

  handleChange = delegate => event => delegate(event.target.files[0]);

  render() {
    const {
      id,
      input: { onChange, ...props },
      placeholder,
    } = this.props;

    const { filename } = this.state;

    const classes = classnames('upload-file', { 'upload-file--selected': props && props.value });

    return (
      <label className={classes} htmlFor={id}>
        <div className="upload-file__label-container">
          {props && props.value ? <DocumentIcon /> : <UploadIcon />}

          <div className="upload-file__label">{filename || placeholder}</div>
        </div>

        {props.value && (
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
          {...props}
          id={id}
          className="input-file"
          onChange={this.handleChange(onChange)}
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
